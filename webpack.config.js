const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const production = process.env.NODE_ENV === 'production';

module.exports = {
  // Entry point of app
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },

  // Output files
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: production ? '[name].[contenthash].js' : '[name].js',
    clean: true, // clear dist folder
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: production
        ? '[name].[contenthash].css'
        : '[name].css',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: ['html-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      // {
      //     test: /\.s[ac]ss$/i,
      //     exclude: /node_modules/,
      //     use: [
      //         production
      //             ? MiniCssExtractPlugin.loader
      //             : 'style-loader',
      //         {
      //             loader: 'css-loader',
      //             options: {
      //                 sourceMap: !production,
      //             },
      //         },
      //         {
      //             loader: 'postcss-loader',
      //             options: {
      //                 sourceMap: !production,
      //             },
      //         },
      //         {
      //             loader: 'sass-loader',
      //             options: {
      //                 sourceMap: !production,
      //             },
      //         },
      //     ],
      // },
    ],
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['*', '.js', '.jsx', '.sass', '.scss'],
  },

  devServer: {
    port: 3000,
    hot: true,
  },
  mode: production ? 'production' : 'development',
  target: production ? 'browserslist' : 'web',
};
