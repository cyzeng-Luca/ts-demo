import { combineReducers } from "redux";
import Main from "./reduxs/reducers/Main";

const MAIN = "MAIN";

const rootReducer = combineReducers({
  Main
});

export default rootReducer;
export type AppState = ReturnType<typeof rootReducer>;

export type moduleType = typeof MAIN;
