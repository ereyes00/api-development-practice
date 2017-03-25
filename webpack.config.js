const path = require("path");
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: "./front/App.jsx",
  output: {
    path: path.join(__dirname, '/front/public'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', `react`]
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: [".js", ".jsx"]
  }
};