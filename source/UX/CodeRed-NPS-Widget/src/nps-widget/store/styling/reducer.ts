import { Reducer } from 'redux';
import * as StlyingAction from './actions'
import { StyleProperty } from './types';
//import StylePropertiesState = require('./types');

// Type-safe initialState!
export const initialState = <Array<StyleProperty>>new Array();

const StylingReducer: Reducer<Array<StyleProperty>> = (state: StyleProperty[] = initialState, action: any) =>
{
  switch ((action as StlyingAction.ActionTypes).type) {
    case StlyingAction.StylingActionTypeKeys.ADD:
      state.push(action.styleProperty);
      var res = state.slice();
      return res;

      case StlyingAction.StylingActionTypeKeys.CLEAR_ALL:
        //return initialState;
        return state;
      case StlyingAction.StylingActionTypeKeys.SUBTRACT:
        return state;
    default:
      return state;
  };

}

export default StylingReducer;
