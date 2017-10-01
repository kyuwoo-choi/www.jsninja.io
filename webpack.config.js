const path = require('path');

const IS_PRODUCTION = process.argv.indexOf('-p') >= 0;
const DIST_DIR_NAME = 'dist';
const DIST_PATH = path.join(__dirname, DIST_DIR_NAME);
const DIST_FILE = `jsninja${IS_PRODUCTION ? '.min' : ''}.js`;
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
  devtool: 'inline-source-map',
  devServer: {
    publicPath: PUBLIC_PATH
  }
};

