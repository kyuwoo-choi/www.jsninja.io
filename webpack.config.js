const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const DIST_DIR_NAME = 'dist';
const DIST_PATH = path.join(__dirname, DIST_DIR_NAME);
const DIST_FILE = `jsninja.js`;
const PUBLIC_PATH = `http://localhost:8080/${DIST_DIR_NAME}/`;

module.exports = {
  entry: './app/index.js',
  output: {
    path: DIST_PATH,
    filename: DIST_FILE
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          babelrc: true
        }
      }, {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          configFile: './.eslintrc'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([DIST_DIR_NAME])
  ],
  devtool: 'inline-source-map',
  devServer: {
    publicPath: PUBLIC_PATH
  }
};

