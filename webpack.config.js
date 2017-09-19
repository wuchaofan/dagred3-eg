const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015']
            }
        },
        {
            test: /\.css$/,
            use: [
            'style-loader',
            'css-loader'
            ]
        }
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: 'Hot Module Replacement'
    // }),
    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};