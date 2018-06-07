import { Reducer } from 'redux';
import * as StlyingAction from './actions'
import StyleProperty from './types';

// Type-safe initialState!
export const initialState: StyleProperty[] = <Array<StyleProperty>>new Array();

const StylingReducer: Reducer<Array<StyleProperty>> = (state: StyleProperty[] = initialState, action: StlyingAction.ActionTypes) => {

  switch (action.type) {
    case StlyingAction.StylingActionTypeKeys.ADD:
      return state;
    case StlyingAction.StylingActionTypeKeys.CLEAR_ALL:
      return initialState;
    case StlyingAction.StylingActionTypeKeys.SUBTRACT:
      return state;
    default:
      return state;
  }

};

export default StylingReducer;
