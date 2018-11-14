const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {extensions: ['.js']},
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new CleanWebpackPlugin(['build'], {verbose: true}) // clean repertoire build
  ],
  devServer: {
    contentBase: path.resolve(__dirname,'../', 'public'), // si on veut acceder à des ressources non webpack (favico ?)
    open: true
  },
  devtool: 'source-map' // avoir les sources en debug
};
