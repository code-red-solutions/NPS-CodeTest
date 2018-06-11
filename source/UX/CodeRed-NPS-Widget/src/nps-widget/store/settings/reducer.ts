import { Reducer } from 'redux';
import Types = require('./types');
import Settings = Types.Settings;
import AnswerRange = Types.AnswerRange;
import MiscSettings = Types.MiscSettings
import * as Actions from './actions'
import * as _ from 'lodash';

// Type-safe initialState!
export const initialState: Settings = new Settings(
  new Array<AnswerRange>(
    new AnswerRange(
      0, 10, 'Is there anything we can do to improve our service?'
    )
  ),
  new Array<number>(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
  new MiscSettings(
    'Default widget',
    'Hi there! We value your feedback on this service so we can better serve you. Cpuld you please take a moment to answer this question?',
    'On a scale of 0 - 10, how likely would you be to use this service again?',
    90
  )
);

const SettingsReducer: Reducer<Settings> = (state: Settings = initialState, action: any) =>
{

  switch ((action as Actions.ActionTypes).type) {

    case Actions.SettingActionTypeKeys.SetRange:
      state.answerRanges = action.answerRanges;
      // ReSharper disable once TsResolvedFromInaccessibleModule
      return _.assign({}, state);

    case Actions.SettingActionTypeKeys.SetAnswerValues:
      state.answerValues = action.answerValues;
      // ReSharper disable once TsResolvedFromInaccessibleModule
      return _.assign({}, state);

    case Actions.SettingActionTypeKeys.AddMiscSettings:
      state.miscSettings.widgetName = action.miscSettings.widgetName || state.miscSettings.widgetName;
      state.miscSettings.introductionStatement = action.miscSettings.introductionStatement || state.miscSettings.introductionStatement;
      state.miscSettings.mainQuestion = action.miscSettings.mainQuestion || state.miscSettings.mainQuestion;
      state.miscSettings.timeOutOnAnswer = action.miscSettings.timeOutOnAnswer || state.miscSettings.timeOutOnAnswer;
      // ReSharper disable once TsResolvedFromInaccessibleModule
      return _.assign({}, state);

    default:
      return state;

  };

}

export default SettingsReducer;
