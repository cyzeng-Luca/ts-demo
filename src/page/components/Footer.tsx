import React, { Component } from "react";
import { Product } from "../../reduxs/reducers/Main";

import "./Footer.less";

interface FooterProps {
  productMap: {
    [config: string]: Product;
  };
}
class Footer extends Component<FooterProps> {
  render() {
    const { productMap } = this.props;
    let totalPrice = 0;
    Object.keys(productMap).forEach(item => {
      totalPrice += productMap[item].price * productMap[item].amount;
    });

    return (
      <div className="Footer">
        <div className="FooterContainer">
          <div className="priceBox">
            <span className="total">
              Total price <span className="detail">￥ {totalPrice}</span>{" "}
            </span>
            <span className="other">包邮</span>
          </div>
          <span className="total">￥{totalPrice}</span>
        </div>
      </div>
    );
  }
}

export default Footer;
