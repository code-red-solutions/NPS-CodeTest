import { Action, ActionCreator, Dispatch } from 'redux';
import { IApplicationState } from '../store';
import { ThunkAction } from 'redux-thunk';
import * as _ from 'lodash';
import { IAnswerRangeQuestionFinder } from '../../services/AnswerRangeQuestionFinder';
import Types = require('../settings/types');

type ThunkResult<TR> = ThunkAction<TR, IApplicationState, undefined, ActionTypes>;

export enum UserStateActionTypeKeys {
  SetRating = 'SET_RATING',
  SetSelectedAnswerRangeQuestion = 'SET_SELECTED_ANSWER_RANGE_QUESTION',
  SetAnswerRangeQuestionResponse = 'SET_ANSWER_RANGE_RESPONSE',
  SetPageState = 'SET_PAGE_STATE',
  OtherAction = '___other_action____'
}

export enum PageStateKeys {
  Feedback = 'FEEDBACK',
  Submitting = 'SUBMITTING',
  Submitted = 'SUBMITTED',
  Retry = 'RETRY',
}

export interface ISetRatingAction extends Action {
  type: UserStateActionTypeKeys.SetRating;
  rating:  number;
}

export interface ISetSelectedAnswerRangeQuestionAction extends Action {
  type: UserStateActionTypeKeys.SetSelectedAnswerRangeQuestion;
  question: string;
}

export interface ISetPageStateAction extends Action {
  type: UserStateActionTypeKeys.SetPageState;
  state: PageStateKeys;
}

export interface ISetAnswerRangeQuestionResponseAction extends Action {
  type: UserStateActionTypeKeys.SetAnswerRangeQuestionResponse;
  response: string;
}

export interface IOtherAction extends Action {
  type: UserStateActionTypeKeys.OtherAction;
}

export type ActionTypes =
  | ISetRatingAction
  | ISetSelectedAnswerRangeQuestionAction
  | ISetAnswerRangeQuestionResponseAction
  | ISetPageStateAction
  | IOtherAction;

export const setRatingValue: ActionCreator<ISetRatingAction> = (rating: number) => ({
  type: UserStateActionTypeKeys.SetRating,
  rating: rating
});

const setSelectedAnswerRangeQuestion: ActionCreator<ISetSelectedAnswerRangeQuestionAction> = (question: string) => ({
  type: UserStateActionTypeKeys.SetSelectedAnswerRangeQuestion,
  question: question
});

const setPageState: ActionCreator<ISetPageStateAction> = (state: PageStateKeys) => ({
  type: UserStateActionTypeKeys.SetPageState,
  state: state
});

export const setAnswerRangeQuestionResponse: ActionCreator<ISetAnswerRangeQuestionResponseAction> = (response: string) => ({
  type: UserStateActionTypeKeys.SetAnswerRangeQuestionResponse,
  response: response
});

export const setRatingValueThunk: ActionCreator<ThunkResult<Action>> = (rating: number, AnswerRangeQuestionFinder: IAnswerRangeQuestionFinder) => {

  return (dispatch: Dispatch<ISetRatingAction>, getState): Action => {

    // side effects here

    // find the correct answer range from the selected rating
    const selectedAnswerRange = AnswerRangeQuestionFinder.findAnswerRangeByRangeValue(getState().settings.answerRanges, rating);
    if (selectedAnswerRange != null)
      (dispatch as Dispatch<ISetSelectedAnswerRangeQuestionAction>)(setSelectedAnswerRangeQuestion(selectedAnswerRange.question));

    return dispatch(setRatingValue(rating));

  };
};

export const setPageStateThunk: ActionCreator<ThunkResult<Action>> = (state: PageStateKeys) => {

  return (dispatch: Dispatch<ISetPageStateAction>): Action => {

    // side effects here

    

    return dispatch(setPageState(state));

  };
};


//  export const addMiscSettings: ActionCreator<IAddMiscSettings> = (miscSettings: MiscSettings) => ({
//    type: SettingActionTypeKeys.AddMiscSettings,
//    miscSettings: miscSettings
//  });

//  export const setAnswerRangesThunk: ActionCreator<ThunkResult<Action>> =
//  (
//    answerRanges: Array<AnswerRange>,
//    answerValuesCreator: IAnswerValuesCreator,
//    answerValueValidator?: IAnswerValueValidator
//  ) => {
//    return (dispatch: Dispatch<ISetAnswerRangesAction>): Action  => {

//      // side effects here
//      if (answerValueValidator) {
//        // TODO: invoke the validator here but it's NOT IMPLEMENTED
//      }

//      let answerValues: number[] = new Array<number>();
//      // ReSharper disable once TsResolvedFromInaccessibleModule
//      _.forEach(answerRanges, (item) => {
//        // ReSharper disable once TsResolvedFromInaccessibleModule
//        answerValues = _.concat(answerValues, answerValuesCreator.getValues(item.start, item.end));
//      });

//      (dispatch as Dispatch<ISetAnswerValues>)(setAnswerValues(answerValues));

//      return dispatch({
//        type: SettingActionTypeKeys.SetRange,
//        answerRanges: answerRanges
//      });

//    };
//  };
