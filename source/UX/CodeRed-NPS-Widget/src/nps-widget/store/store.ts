import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import { StyleProperty } from './styling/types';

export interface IApplicationState {
  styling: StyleProperty[];
}

export function configureStore(initialState: IApplicationState): Store<IApplicationState> {
  return createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
  );
}
