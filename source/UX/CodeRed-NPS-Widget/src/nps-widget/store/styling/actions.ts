import { ActionCreator } from 'redux';
import { StyleProperty, StylePropertiesState } from './types'

export enum StylingActionTypeKeys {
  CLEAR_ALL = "CLEAR_ALL",
  ADD = "ADD",
  SUBTRACT = "SUBTRACT",
  OTHER_ACTION = "___other_action____"
}

export interface ClearAllAction {
  type: StylingActionTypeKeys.CLEAR_ALL;
}

export interface AddAction {
  type: StylingActionTypeKeys.ADD;
  styleProperty: StyleProperty;
}

export interface SubtractAction {
  type: StylingActionTypeKeys.SUBTRACT;
  id: string;
}

export interface OtherAction {
  type: StylingActionTypeKeys.OTHER_ACTION;
}

export type ActionTypes =
  | ClearAllAction
  | AddAction
  | SubtractAction
  | OtherAction;


export const addStyle: ActionCreator<AddAction> = (styleProperty: StyleProperty) => ({
  type: StylingActionTypeKeys.ADD,
  styleProperty: styleProperty
});

export const subtractStyle: ActionCreator<SubtractAction> = (id: string) => ({
  type: StylingActionTypeKeys.SUBTRACT,
  id: id
});

export const clearStyles: ActionCreator<ClearAllAction> = () => ({
  type: StylingActionTypeKeys.CLEAR_ALL
});
