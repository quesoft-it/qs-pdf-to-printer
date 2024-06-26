const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    //new CopyPlugin({ patterns: [{ from: "./src/SumatraPDF-3.4.6-32.exe" }] }),
    new CopyPlugin({
      patterns: [
        {
          from: "./src/quesoft-cli-pdf-printer",
          to: "./quesoft-cli-pdf-printer",
        },
      ],
    }),
  ],
  target: "node",
  node: {
    __dirname: false,
  },
};
