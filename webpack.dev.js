const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: ".",
    historyApiFallback: {
      rewrites: [{ from: /^\/heart/, to: "/index.html" }]
    }
  }
});
