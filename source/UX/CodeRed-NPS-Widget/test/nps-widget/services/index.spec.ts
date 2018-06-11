// ReSharper disable TsResolvedFromInaccessibleModule

// testing infrastrucre dependencies
import TypeMoq = require('typemoq');
import { expect } from 'chai';

// test case external libraries
import { Store } from 'redux';

// test case internal dependencies
import { IDictionary, Dictionary } from '../../../src/utils/Dictionary';
import StyleDefinitionsDataHelper from '../../../src/nps-widget/data/StyleDefinitionsDataHelper';
import StyleDefinitionsMapper, { IStyleDefinitionsMapper } from '../../../src/nps-widget/services/StyleDefinitionsMapper';
import StylingDispatcher from '../../../src/nps-widget/services/StylingDispatcher';
import { StyleProperty } from '../../../src/nps-widget/store/styling/types';


//Test suite level declarations
let dispatcher: StylingDispatcher;
let mapper: IStyleDefinitionsMapper;
var data: IDictionary<string, string>;
let mockIStyleDefinitionsMapper: TypeMoq.IMock<IStyleDefinitionsMapper>;
let mockStore: TypeMoq.IMock<Store>;
let styles: any;
// Tests

describe('Given an instance of the StyleDefinitionsMapper class', () => {
  before(() => {
    data = StyleDefinitionsDataHelper.GetData();
    mapper = new StyleDefinitionsMapper(data);
  });
  describe('when it\'s passed an IDictionary<string, string> in the constructor ', () => {
    it('it should store it as a variable and pass it back out when the \'definitions\' property getter is called.', () => {
      expect(mapper.definitions).to.equal(data);
    });
  });
});

describe('StylingDispatcher', () => {

  beforeEach(() => {

    mockIStyleDefinitionsMapper = TypeMoq.Mock.ofType<IStyleDefinitionsMapper>();
    mockStore = TypeMoq.Mock.ofType<Store>();

    dispatcher = new StylingDispatcher(mockStore.object, mockIStyleDefinitionsMapper.object);

    // user level config
    styles = {
      A: '1',
      B: '2',
      C: '3' // this should be ignored as there's no 'C' value defined in the mapper below
    };

    // Dispatcher applies user level config in 'styles' to the following application level config
    mockIStyleDefinitionsMapper.setup(x => x.definitions).returns(() => {
      let dic = new Dictionary<string, string>();
      dic.put('A', 'variableA'); // dispatcher should create a StyleProperty of { id: 'A', styleVariableName: 'variableA', value: '1' }
      dic.put('B', 'variableB'); // dispatcher should create a StyleProperty of { id: 'B', styleVariableName: 'variableB', value: '2' }
      dic.put('D', 'variableD'); // dispatcher should create a StyleProperty of { id: 'D', styleVariableName: 'variableD', value: null }
      return dic;
    });

  });

  describe('when it\'s been passed IStyleDefinitionsMapper and Store objects in the constrcutor and then the dispatchStyles method is called with matching styles', () => {
    it('it should dispatch a new StyleProperty object to the Store for each item in the IStyleDefinitionsMapper with a value from the matching style item', () => {

      // given
      let shouldBeThis = new StyleProperty('A', 'variableNameA', '3');

      mockStore.setup(store => store.dispatch(TypeMoq.It.isAny())).verifiable(TypeMoq.Times.exactly(3));

      //mockStore.setup(store => store.dispatch(TypeMoq.It.isValue<StyleProperty>(shouldBeThis))).verifiable(TypeMoq.Times.exactly(1));
      //mockStore.setup(store => store.dispatch(TypeMoq.It.is(x => true))).verifiable(TypeMoq.Times.exactly(3));
      //mockStore.setup(store => store.dispatch(TypeMoq.It.isAnyObject(StyleProperty))).verifiable(TypeMoq.Times.exactly(3));
      //mockStore.setup(store => store.dispatch(TypeMoq.It.isObjectWith<any>({ id: 'A' }))).verifiable(TypeMoq.Times.exactly(1));
      //mockStore.setup(store => store.dispatch(TypeMoq.It.isObjectWith<StyleProperty>({ id: 'A' }))).verifiable(TypeMoq.Times.exactly(1));

      dispatcher.dispatchStyles(styles);

      mockStore.verifyAll();

    });

  });


});
