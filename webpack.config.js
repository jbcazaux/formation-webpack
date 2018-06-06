const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => ({
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
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
        {
          loader: 'file-loader',
          options: {name: "[name]-[hash].[ext]"}
        }
      ]}
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      favicon: './src/favicon.ico'
    }),
    new CleanWebpackPlugin(['build'], {verbose: true}) // clean repertoire build
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'public'), // si on veut acceder a des ressources non webpack
    publicPath: '/',
    open: true
  },
  devtool: argv.mode === 'development' ? 'source-map' : false
});

