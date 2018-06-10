import StyleDefinitionsMapper from './StyleDefinitionsMapper'
import { addStyle } from '../store/styling/actions';
import { Store } from 'redux';
import { StyleProperty } from '../store/styling/types';

export interface IStylingDispatcher {
  dispatchStyles(styling: any): void
}

export default class StylingDispatcher implements IStylingDispatcher {

  private readonly styleDefinitionsMapper: StyleDefinitionsMapper;
  private readonly store;

  constructor(store: Store, styleDefinitionsMapper: StyleDefinitionsMapper) {
    this.styleDefinitionsMapper = styleDefinitionsMapper;
    this.store = store;
  }

  dispatchStyles(styling: any): void {

    for (let i = 0; i < this.styleDefinitionsMapper.definitions.getKeys().length; i++) {

      const id = this.styleDefinitionsMapper.definitions.getKeys()[i];
      const styleVariableName = this.styleDefinitionsMapper.definitions.get(id);
      const value = styling[id] || null;
      var styleProperty = new StyleProperty(id, styleVariableName, value);

      this.store.dispatch(addStyle(styleProperty));

    }

  }

}
