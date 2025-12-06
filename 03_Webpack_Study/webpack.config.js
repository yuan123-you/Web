const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const webpack = require("webpack");
const config = {
  //打包模式（development开发模式-使用相关内置优化）
  // mode: "development",
  // 入口
  entry: path.resolve(__dirname, "src/login/index.js"),
  // 出口
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./login/index.js",
    clean: true,
  },
  //插件（给Webpack提供更多功能）
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/login.html"), //模版文件
      filename: path.resolve(__dirname, "dist/login/index.html"), //输出文件
      useCdn: process.env.NODE_ENV === "production", // 生产模式下使用 cdn 引入的地址
    }),
    new MiniCssExtractPlugin({ filename: "./login/index.css" }), //生成css文件
    new webpack.DefinePlugin({
      //key是注入到打包后的前端Js代码中作为全局变量
      //value是变量对应的值（在cross-env注入在node.js中的环境变量字符串
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
  ],

  //加载器（让webpack识别更多模块文件内容）
  module: {
    rules: [
      {
        test: /\.css$/i,
        // use: ["style-loader", "css-loader"],
        use: [
          process.env.NODE_ENV === "development"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          process.env.NODE_ENV === "development"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset",
        generator: {
          filename: "assets/[hash][ext][query]",
        },
      },
    ],
  },
  // 优化
  optimization: {
    // 最小化
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），
      // 将下一行取消注释（保证 js 代码还能压缩）
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
  // 解析
  resolve: {
    // 别名
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
//开发环境下使用sourcemap选项
if (process.env.NODE_ENV === "development") {
  config.devtool = "inline-source-map";
}
module.exports = config;
