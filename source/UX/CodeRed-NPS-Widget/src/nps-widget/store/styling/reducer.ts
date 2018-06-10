import { Reducer } from 'redux';
import * as StlyingAction from './actions'
import { StyleProperty } from './types';
import * as _ from 'lodash';

// Type-safe initialState!
export const initialState = <Array<StyleProperty>>new Array();

const StylingReducer: Reducer<Array<StyleProperty>> = (state: StyleProperty[] = initialState, action: any) =>
{
  switch ((action as StlyingAction.ActionTypes).type) {
    case StlyingAction.StylingActionTypeKeys.Add:
      return _.assign([], _.concat(state, action.styleProperty));
    case StlyingAction.StylingActionTypeKeys.ClearAll:
      return <Array<StyleProperty>>new Array();
    default:
      return state;
  };

}

export default StylingReducer;
