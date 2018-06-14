import { Reducer } from 'redux';
import * as Actions from './actions'
import * as _ from 'lodash';
import { UserState } from './types';
import PageStateKeys = Actions.PageStateKeys;

// Type-safe initialState!
export const initialState: UserState = new UserState();

const UserStateReducer: Reducer<UserState> = (state: UserState = initialState, action: any) =>
{

  switch ((action as Actions.ActionTypes).type) {

    case Actions.UserStateActionTypeKeys.SetRating:
      state.rating = action.rating;
      // ReSharper disable once TsResolvedFromInaccessibleModule
      return _.assign({}, state);

    case Actions.UserStateActionTypeKeys.SetSelectedAnswerRangeQuestion:
      state.selectedAnswerRangeQuestion = action.question;
      // ReSharper disable once TsResolvedFromInaccessibleModule
      return _.assign({}, state);

    case Actions.UserStateActionTypeKeys.SetAnswerRangeQuestionResponse:
      state.answerRangeQuestionResponse = action.response;
      // ReSharper disable once TsResolvedFromInaccessibleModule
      return _.assign({}, state);

    case Actions.UserStateActionTypeKeys.SetPageState:
      state.pageState = action.state;
      // ReSharper disable once TsResolvedFromInaccessibleModule
      return _.assign({}, state);

    default:
      return state;

  };

}

export default UserStateReducer;
