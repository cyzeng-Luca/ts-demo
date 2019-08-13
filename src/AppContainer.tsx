/* eslint-disable @typescript-eslint/no-useless-constructor */
import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import Main from "./page/Main";

const store = configureStore();

class AppContainer extends Component {
  render() {
    return <Provider store={store}>{<Main />}</Provider>;
  }
}
export default AppContainer;
