import { Action, ActionCreator, Dispatch } from 'redux';
import { AnswerRange, MiscSettings } from './types'
import { IApplicationState } from '../store';
import { ThunkAction } from 'redux-thunk';
import { IAnswerValuesCreator } from '../../services/AnswerValuesCreator';
import { IAnswerValueValidator } from '../../services/AnswerValueValidator';
import * as _ from 'lodash';

type ThunkResult<TR> = ThunkAction<TR, IApplicationState, undefined, ActionTypes>;

export enum SettingActionTypeKeys {
  SetRange = 'SET_RANGE',
  SetAnswerValues = 'SET_ANSWER_VALUES',
  AddMiscSettings = 'ADD_MISC_SETTINGS',
  OtherAction = '___other_action____'
}

export interface ISetAnswerRangesAction extends Action {
  type: SettingActionTypeKeys.SetRange;
  answerRanges: AnswerRange[];
}

export interface ISetAnswerValues extends Action {
  type: SettingActionTypeKeys.SetAnswerValues;
  answerValues: number[];
}

export interface IAddMiscSettings extends Action {
  type: SettingActionTypeKeys.AddMiscSettings;
  miscSettings: MiscSettings;
}

export interface IOtherAction extends Action {
  type: SettingActionTypeKeys.OtherAction;
}

export type ActionTypes =
  | ISetAnswerRangesAction
  | ISetAnswerValues
  | IAddMiscSettings
  | IOtherAction;

export const setAnswerValues: ActionCreator<ISetAnswerValues> = (values: number[]) => ({
  type: SettingActionTypeKeys.SetAnswerValues,
  answerValues: values
});

export const addMiscSettings: ActionCreator<IAddMiscSettings> = (miscSettings: MiscSettings) => ({
  type: SettingActionTypeKeys.AddMiscSettings,
  miscSettings: miscSettings
});

export const setAnswerRangesThunk: ActionCreator<ThunkResult<Action>> =
(
  answerRanges: AnswerRange[],
  answerValuesCreator: IAnswerValuesCreator,
  answerValueValidator?: IAnswerValueValidator
) => {
  return (dispatch: Dispatch<ISetAnswerRangesAction>): Action  => {

    // side effects here
    if (answerValueValidator) {
      // TODO: invoke the validator here but it's NOT IMPLEMENTED
    }

    let answerValues: number[] = new Array<number>();
    // ReSharper disable once TsResolvedFromInaccessibleModule
    _.forEach(answerRanges, (item) => {
      // ReSharper disable once TsResolvedFromInaccessibleModule
      answerValues = _.concat(answerValues, answerValuesCreator.getValues(item.start, item.end));
    });

    (dispatch as Dispatch<ISetAnswerValues>)(setAnswerValues(answerValues));

    return dispatch({
      type: SettingActionTypeKeys.SetRange,
      answerRanges: answerRanges
    });

  };
};
