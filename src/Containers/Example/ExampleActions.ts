import * as constants from "./ExampleConstants";
import * as exampleApi from "./ExampleApi";
import { Dispatch } from "react";

//Actions
export interface AddTodoAction {
  type: constants.ADD_TODO_TYPE;
  payload: string;
}
export interface ToggleTodoAction {
  type: constants.TOGGLE_TODO_TYPE;
  payload: string;
}
export interface ChangeFilterAction {
  type: constants.CHANGE_FILTER_TYPE;
  payload: string;
}
export interface TestRequestApiAction {
  type: constants.TEST_REQUEST_API_TYPE;
}
export interface TestRequestApiCompletedAction {
  type: constants.TEST_REQUEST_API_COMPLETED_TYPE;
}

//Action creators
export const addTodo = (title: string): AddTodoAction => {
  return {
    type: constants.ADD_TODO,
    payload: title
  };
};
export const toggleTodo = (id: string): ToggleTodoAction => {
  return {
    type: constants.TOGGLE_TODO,
    payload: id
  };
};
export const changeFilter = (filter: string): ChangeFilterAction => {
  return {
    type: constants.CHANGE_FILTER,
    payload: filter
  };
};
export const testApi = (): TestRequestApiAction => {
  return {
    type: constants.TEST_REQUEST_API
  };
};
export const testApiCompleted = (): TestRequestApiCompletedAction => {
  return {
    type: constants.TEST_REQUEST_API_COMPLETED
  };
};

//Thunk actions
export const testRequestApi = (): any => (
  dispatch: Dispatch<ExampleActions>
): void => {
  dispatch(testApi());
  exampleApi
    .testRequest()
    .then(fetchedTodo => {
      dispatch(addTodo(fetchedTodo));
    })
    .catch(err => {
      console.log("handle error", err);
    })
    .finally(() => dispatch(testApiCompleted()));
};

export type ExampleActions =
  | AddTodoAction
  | ToggleTodoAction
  | ChangeFilterAction
  | TestRequestApiAction
  | TestRequestApiCompletedAction;
