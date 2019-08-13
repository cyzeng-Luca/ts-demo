import React, { Component } from "react";
import { connect } from "react-redux";

import { Icon, Drawer, Button } from "antd";
import { addProduct } from "../../reduxs/actions";

import "./Header.less";

interface HeaderProps {
  addProduct: typeof addProduct;
}

class Header extends Component<HeaderProps> {
  private inputRef: any;

  state = { visible: false, placement: "left", inputValue: "" };

  inputChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      inputValue: e.currentTarget.value
    });
  };
  addProduct = () => {
    const { addProduct } = this.props;
    const { inputValue } = this.state;
    if (inputValue !== "") {
      addProduct(inputValue);
    }
    this.onClose();
  };

  showDrawer = () => {
    this.setState(
      {
        visible: true
      },
      () => {
        setTimeout(() => {
          this.inputRef && this.inputRef.focus();
        });
      }
    );
  };

  onClose = () => {
    this.setState({
      visible: false,
      inputValue: ""
    });
  };

  render() {
    const { visible, inputValue } = this.state;
    return (
      <div className="Header">
        <div className="HeaderContainer">
          <span>购物车</span>
          <Icon
            type="plus"
            style={{
              fontWeight: "bold"
            }}
            onClick={this.showDrawer}
          />
        </div>
        <Drawer
          placement="bottom"
          closable={false}
          onClose={this.onClose}
          visible={visible}
        >
          <div className="searchBox">
            <input
              ref={element => {
                this.inputRef = element;
              }}
              value={inputValue}
              type="text"
              className="searchInput"
              placeholder="请输入商品编码"
              style={{
                width: "100%",
                borderStyle: "none",
                borderBottom: "1px solid #ccc",
                marginTop: "40px",
                paddingLeft: "6px",
                paddingBottom: "12px"
              }}
              onChange={this.inputChange}
            />
            <Button
              type="primary"
              size="large"
              style={{
                width: "100%",
                marginTop: "50px"
              }}
              onClick={this.addProduct}
            >
              加入购物车
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addProduct
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
