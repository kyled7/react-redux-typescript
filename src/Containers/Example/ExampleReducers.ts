import { ExampleState } from "./ExampleTypes";
import { ExampleActions } from "./ExampleActions";
import {
  ADD_TODO,
  TOGGLE_TODO,
  FILTER_ALL,
  CHANGE_FILTER,
  TEST_REQUEST_API,
  TEST_REQUEST_API_COMPLETED
} from "./ExampleConstants";
import uuid from "uuid/v4";

export const initialState: ExampleState = {
  todos: [],
  filter: FILTER_ALL,
  loading: false
};

const exampleReducer = (
  state: ExampleState = initialState,
  action: ExampleActions
): ExampleState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat({
          id: uuid(),
          title: action.payload,
          isCompleted: false
        })
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          return todo.id !== action.payload
            ? todo
            : { ...todo, isCompleted: !todo.isCompleted };
        })
      };
    case CHANGE_FILTER:
      return { ...state, filter: action.payload };
    case TEST_REQUEST_API:
      return { ...state, loading: true };
    case TEST_REQUEST_API_COMPLETED:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default exampleReducer;
