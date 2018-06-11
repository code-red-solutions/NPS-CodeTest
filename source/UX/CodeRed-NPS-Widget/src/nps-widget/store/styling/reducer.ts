import { Reducer } from 'redux';
import * as Actions from './actions'
import { StyleProperty } from './types';
import * as _ from 'lodash';

// Type-safe initialState!
export const initialState = <Array<StyleProperty>>new Array();

const StylingReducer: Reducer<Array<StyleProperty>> = (state: StyleProperty[] = initialState, action: any) =>
{
  switch ((action as Actions.ActionTypes).type) {
    case Actions.StylingActionTypeKeys.Add:
      // ReSharper disable TsResolvedFromInaccessibleModule
      return _.assign([], _.concat(state, action.styleProperty));
      // ReSharper restore TsResolvedFromInaccessibleModule
    case Actions.StylingActionTypeKeys.ClearAll:
      return <Array<StyleProperty>>new Array();
    default:
      return state;
  };

}

export default StylingReducer;
