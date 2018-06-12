import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import { StyleProperty } from './styling/types';
import Types = require('./settings/types');
import Settings = Types.Settings;
import { UserState } from './userstate/types';

export interface IApplicationState {
  styling: StyleProperty[];
  settings: Settings;
  userState: UserState;
}

export function configureStore(initialState: IApplicationState): Store<IApplicationState> {
  return createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
  );
}
