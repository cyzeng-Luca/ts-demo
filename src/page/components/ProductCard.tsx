import React, { Component } from "react";
import { connect } from "react-redux";
import { Icon } from "antd";
import { Product } from "../../reduxs/reducers/Main";
import { plus, minus } from "../../reduxs/actions";

import "./ProductCard.less";
interface ProductCardProps {
  product: Product;
  plus: typeof plus;
  minus: typeof minus;
}

class ProductCard extends Component<ProductCardProps> {
  plus = (id: string) => {
    const { plus } = this.props;
    plus(id);
  };
  minus = (id: string) => {
    const { minus } = this.props;
    minus(id);
  };
  render() {
    const { id, title, price, amount } = this.props.product;
    return (
      <div className="ProductCardContainer">
        <div className="imageBox"></div>
        <div className="descriptionBox">
          <div className="titleBox">
            <span className="title">{title}</span>
            <span className="price">￥{price}</span>
          </div>
          <div className="numberBox">
            <Icon
              type="plus"
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                padding: "5px 10px 5px 0",
                cursor: "pointer",
                color: "#aaa"
              }}
              onClick={() => {
                this.plus(id);
              }}
            />
            <span className="amount">{amount}</span>
            <Icon
              type="minus"
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                padding: "5px 10px 5px 10px",
                cursor: "pointer",
                color: amount === 1 ? "#eee" : "#aaa"
              }}
              onClick={() => {
                this.minus(id);
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  plus,
  minus
};

export default connect(
  null,
  mapDispatchToProps
)(ProductCard);
