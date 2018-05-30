import { combineReducers, Dispatch, Reducer } from 'redux';

import StyleProperty from './styling/types';
import StylingReducer from './styling/reducer';

export interface ApplicationState {
  styling: StyleProperty[];
}

export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  styling: StylingReducer
});