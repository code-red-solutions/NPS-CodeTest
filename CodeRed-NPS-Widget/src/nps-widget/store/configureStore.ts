import { createStore, applyMiddleware, Store } from 'redux';

// Import the state interface and our combined reducers.
import { ApplicationState, reducers } from './index';

export default function configureStore(
  initialState: ApplicationState,
): Store<ApplicationState> {
  // create the composing function for our middlewares
  // const composeEnhancers = composeWithDevTools({});

  // We'll create our store with the combined reducers and the initial Redux state that
  // we'll be passing from our entry point.
  return createStore<ApplicationState>(
    reducers,
    initialState
  );
}
