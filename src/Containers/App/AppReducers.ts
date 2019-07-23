import { combineReducers, Reducer } from "redux";
import {
  ExampleReducer,
  initialState as exampleInitialState
} from "../Example";
import { ApplicationState } from "./AppTypes";

const rootReducer: Reducer = combineReducers({
  example: ExampleReducer
} as any);

export const initialState: ApplicationState = {
  example: exampleInitialState
};

export default rootReducer;
