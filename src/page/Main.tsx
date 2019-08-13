import React, { Component } from "react";
import { connect } from "react-redux";
import { AppState } from "../reducers";
import { InitialState } from "../reduxs/reducers/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";

import "./Main.less";

interface MainProps {
  Main: InitialState;
}
class Main extends Component<MainProps> {
  render() {
    const { Main } = this.props;
    return (
      <div className="App">
        <Header />
        <div className="AppContainer">
          {Object.keys(Main.productMap).map(item => (
            <ProductCard key={item} product={Main.productMap[item]} />
          ))}
        </div>
        <Footer productMap={Main.productMap} />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  Main: state.Main
});

export default connect(mapStateToProps)(Main);
