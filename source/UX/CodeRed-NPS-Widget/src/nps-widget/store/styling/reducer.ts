import { Reducer } from 'redux';
import * as StlyingAction from './actions'
import { StyleProperty } from './types';
import * as _ from 'lodash';

// Type-safe initialState!
export const initialState = <Array<StyleProperty>>new Array();

const StylingReducer: Reducer<Array<StyleProperty>> = (state: StyleProperty[] = initialState, action: any) =>
{
  switch ((action as StlyingAction.ActionTypes).type) {
    case StlyingAction.StylingActionTypeKeys.ADD:
      state.push(action.styleProperty);
      // ReSharper disable once TsResolvedFromInaccessibleModule
      return _.assign({}, state);
      case StlyingAction.StylingActionTypeKeys.CLEAR_ALL:
        return initialState;
    default:
      return state;
  };

}

export default StylingReducer;
