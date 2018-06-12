import { combineReducers, Reducer } from 'redux';

import { IApplicationState } from './store';
import StylingReducer from './styling/reducer';
import SettingsReducer from './settings/reducer';
import UserStateReducer from './userstate/reducer';

const reducers: Reducer<IApplicationState> = combineReducers<IApplicationState>({
  styling: StylingReducer,
  settings: SettingsReducer,
  userState: UserStateReducer
});

export default reducers;
