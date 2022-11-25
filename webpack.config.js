module.exports = {
  entry: "./src/main.js"
};

const path = require("path");

module.exports = {
  entry: "./src/main.ts",
  mode: "production",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
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
};