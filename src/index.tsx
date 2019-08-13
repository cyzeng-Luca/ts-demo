/* eslint-disable @typescript-eslint/no-useless-constructor */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import AppContainer from "./AppContainer";

class App extends Component {
  constructor(props: {}) {
    super(props);
    // 可以做环境判断，切换不同环境，例如dev、test、uat...
  }
  render() {
    return <AppContainer />;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
