import { createStore, applyMiddleware, Store, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./AppReducers";
import { ApplicationState } from "./AppTypes";

export default function configureStore(
  initialState: ApplicationState
): Store<ApplicationState> {
  let composeEnhancers;
  if (
    typeof window === "object" &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ) {
    composeEnhancers = compose(
      applyMiddleware(thunk),
      (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    );
  } else {
    composeEnhancers = compose(applyMiddleware(thunk));
  }
  return createStore(rootReducer, initialState as any, composeEnhancers);
}
