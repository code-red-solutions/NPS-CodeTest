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
  id: string,
  styleVariableName: string,
  value: string
}

export interface SubtractAction {
  type: StylingActionTypeKeys.SUBTRACT;
  id: string
}

export interface OtherAction {
  type: StylingActionTypeKeys.OTHER_ACTION;
}

export type ActionTypes =
  | ClearAllAction
  | AddAction
  | SubtractAction;
