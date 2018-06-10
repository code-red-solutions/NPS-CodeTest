import { Action, ActionCreator } from 'redux';
import { StyleProperty } from './types'
import { IApplicationState } from '../store';
import { ThunkAction } from 'redux-thunk';

type ThunkResult<TR> = ThunkAction<TR, IApplicationState, undefined, ActionTypes>;

export enum StylingActionTypeKeys {
  ClearAll = 'CLEAR_ALL',
  Add = 'ADD',
  OtherAction = '___other_action____'
}

export interface IClearAllAction extends Action {
  type: StylingActionTypeKeys.ClearAll;
}

export interface IAddAction extends Action {
  type: StylingActionTypeKeys.Add;
  styleProperty: StyleProperty;
}

export interface IOtherAction extends Action {
  type: StylingActionTypeKeys.OtherAction;
}

export type ActionTypes =
  | IClearAllAction
  | IAddAction
  | IOtherAction;

export const clearStyles: ActionCreator<IClearAllAction> = () => ({
  type: StylingActionTypeKeys.ClearAll
});

export const addStyle: ActionCreator<IAddAction> = (styleProperty: StyleProperty) => ({
  type: StylingActionTypeKeys.Add,
  styleProperty
});

//const addStyleThunk: ActionCreator<ThunkResult<Action>> = (styleProperty: StyleProperty) => {
//  return (dispatch: Dispatch<IAddAction>): Action  => {
//    // side effects here
//    return dispatch({
//      type: StylingActionTypeKeys.Add,
//      styleProperty: styleProperty
//    });
//  };
//};
