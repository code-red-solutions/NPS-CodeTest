import { combineReducers, Reducer } from 'redux';

import { IApplicationState } from './store';
import StylingReducer from './styling/reducer';
import SettingsReducer from './settings/reducer';

const reducers: Reducer<IApplicationState> = combineReducers<IApplicationState>({
  styling: StylingReducer,
  settings: SettingsReducer
});

export default reducers;
