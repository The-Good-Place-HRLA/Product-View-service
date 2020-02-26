const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

const browserConfig = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'KLbundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.js[x]?/s,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        loaders: ['style-loader', 'css-loader'],
      }
    ],
  },
  node: {
    fs: 'empty'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

const serverConfig =  {
  entry: './server/index.js',
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.join(__dirname),
    filename: "./server/serverBundle.js",
    libraryTarget: "commonjs2"
  },
  node: {__dirname: false},
  module: {
    rules: [
      {
        test: /\.js[x]?/s,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
          plugins: ["@babel/plugin-proposal-class-properties"]
        }
      }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/^pg-native$/)
  ],
}

module.exports = [browserConfig, serverConfig]