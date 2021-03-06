const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => ({
  entry: {
    bundle: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, '../', 'build'),
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
        test: /\.(png|jpe?g|gif)$/, // chargement des fichiers
        use: [
        {
          loader: 'file-loader',
          options: {name: "[name]-[hash].[ext]"}
        }
      ]},
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: [
              { loader: 'css-loader',
                options: {
                  modules: true,
                  discardComments: {
                    removeAll: true
                  },
                  localIdentName: '[hash:base64:5]'
                }
            }]
          })
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      favicon: './src/favicon.ico'
    }),
    new CleanWebpackPlugin(['build'], {verbose: true}),
    new ExtractTextPlugin({ filename: 'style.css' }),
  ],
  devtool: argv.mode === 'development' ? 'source-map' : false
});
