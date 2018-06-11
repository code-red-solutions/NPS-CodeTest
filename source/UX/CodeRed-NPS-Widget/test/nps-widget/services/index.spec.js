/* global describe, it, before */

import * as Services from '../../../lib/test/codered_nps_widget.js';


import chai from 'chai';

chai.expect();

const expect = chai.expect;

// let dispatcher;
let mapper;
let data;

describe('Given an instance of the StyleDefinitionsMapper class', () => {
  before(() => {
    data = Services.StyleDefinitionsDataHelper.GetData();
    mapper = new Services.StyleDefinitionsMapper(data);
  });
  describe('when it\'s passed an IDictionary<string, string> in the constructor ', () => {
    it('it should store it as a variable and pass it back out when the \'definitions\' property getter is called.', () => {
      expect(mapper.definitions).to.equal(data);
    });
  });
});

//describe('Given an instance of the NpsWidgetConfig class', () => {
//  before(() => {
//    myStyling = new entity.NpsWidgetStylingConfig();
//    lib = new entity.NpsWidgetConfig();
//  });
//  describe('when it\'s passed nothing in the constructor ', () => {
//    it('it should create a new NpsWidgetStyling instance.', () => {
//      //equal vs same comparision - it should be the same by value as
//      //myStyling is a new;y created instance, but should not be the same instance
//      expect(lib.styling).to.eql(myStyling).but.not.equal(myStyling);
//    });
//  });
//});
