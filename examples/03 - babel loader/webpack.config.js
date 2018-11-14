const path = require('path');

module.exports = {
  entry: {
    bundle: './src/main.js' // point d'entrée JS
  },
  output: {
    path: path.resolve(__dirname, '../', 'build'), // répertoire de sortie, ../ car dans /src
    filename: '[name].js' // nom du bundle de sortie (1 bundle par point d'entrée)
  },
  resolve: {extensions: ['.js', '.es6']}, // les modules à importer, sans avoir à mettre l'extension
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
