import { combineReducers, Reducer } from 'redux';

import { IApplicationState } from './store';
import StylingReducer from './styling/reducer';

const reducers: Reducer<IApplicationState> = combineReducers<IApplicationState>({
  styling: StylingReducer
});

export default reducers;
