const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require("customize-cra");
const path = require('path');
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true
  }),
  // addWebpackAlias({
  //   ["@reduxs"]: path.resolve(__dirname, "src/reduxs/*"),
  //   ["@assets"]: path.resolve(__dirname, "src/assets"),
  //   ["@pages"]: path.resolve(__dirname, "src/pages"),
  //   ["@utils"]: path.resolve(__dirname, "src/utils"),
  //   ["@src"]: path.resolve(__dirname, "src"),
  // }),
);

