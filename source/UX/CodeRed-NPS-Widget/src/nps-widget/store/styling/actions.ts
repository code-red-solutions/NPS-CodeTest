import { Action, ActionCreator, Dispatch } from 'redux';
import { StyleProperty } from './types'
import NpsWidget from '../../components/NpsWidget.js';
import StyleDefinitionsMapper from '../../services/styleDefinitionsMapper';
import { ThunkAction } from 'redux-thunk';

export enum StylingActionTypeKeys {
  CLEAR_ALL = "CLEAR_ALL",
  ADD = "ADD",
  OTHER_ACTION = "___other_action____"
}

export interface ClearAllAction {
  type: StylingActionTypeKeys.CLEAR_ALL;
}

export interface AddAction {
  type: StylingActionTypeKeys.ADD;
  styleProperty: StyleProperty;
}

export interface OtherAction {
  type: StylingActionTypeKeys.OTHER_ACTION;
}

export type ActionTypes =
  | ClearAllAction
  | AddAction
  | OtherAction;


export const addStyle: ActionCreator<AddAction> = (styleProperty: StyleProperty) => ({
  type: StylingActionTypeKeys.ADD,
  styleProperty: styleProperty
});

export const clearStyles: ActionCreator<ClearAllAction> = () => ({
  type: StylingActionTypeKeys.CLEAR_ALL
});
