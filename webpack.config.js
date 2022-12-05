const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  entry: "./src/main.ts",
  devServer: {
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "public/dist"),
    filename: "main.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
    title: 'Custom template',
    template: './src/index.html'
  })
  ]
};