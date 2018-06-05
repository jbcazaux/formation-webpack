const path = require('path');

module.exports = {
  entry: {
    bundle: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, '../', 'build'),
    filename: '[name].js'
  },
  resolve: {extensions: ['.js', '.es6']},
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
};
