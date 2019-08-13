import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import rootReducer from "./reducers";

export default function configureStore(preloadState: {} = {}) {
  const middleware: any = [thunkMiddleware];

  const middlewareEnhancer = applyMiddleware(...middleware);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers: any = compose(...enhancers);

  const store = createStore(rootReducer, preloadState, composedEnhancers);
  return store;
}
