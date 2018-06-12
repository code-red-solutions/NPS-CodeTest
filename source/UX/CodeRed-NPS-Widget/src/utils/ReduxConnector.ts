import { Store } from 'redux';
import { IApplicationState } from '../nps-widget/store/store';

export interface IReduxBindable {
  stateReceiver(state: IApplicationState): void;
}

/**
 * Intended to be used in element inside the method
 * connectedCallback
 *
 * <pre>
 * <strong>
 *   connectedCallback() {
 *       super.connectedCallback();
 *       connectToRedux(this);
 *   }
 * </strong>
 * </pre>
 *
 * @param {ReduxBindable} elm
 * @param {Store<IApplicationState>} store
 */

export function connectToRedux(elm: IReduxBindable, store: Store<IApplicationState>) {
  elm.stateReceiver(store.getState());
  store.subscribe(() => {
    elm.stateReceiver(store.getState());
  });

}
