const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// Entry points goes here
const entries = {
  global: ["./src/js/index.js", "./src/scss/style.scss"],
  react: ["./src/components/react/index.jsx"],
};

const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: "[name].css",
  }),
];

if (process.env.NODE_ENV === "development") {
  var mode = "development";
  var devtool = "source-map";
  var minimize = false;
  var hints = "warning";
}

if (process.env.NODE_ENV === "production") {
  var mode = "production";
  var devtool = false;
  var minimize = true;
  var hints = false;
}

module.exports = {
  mode: mode,
  entry: entries,
  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext][query]",
  },
  optimization: {
    minimize: minimize,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              implementation: require("sass"),
              additionalData: `@import "_variables";@import "_include_media";`,
              sassOptions: {
                sourceMap: true,
                includePaths: [path.resolve(__dirname, "./src/scss/")],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ["", ".js", ".jsx"],
        },
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },

  plugins: plugins,

  devtool: devtool,

  performance: {
    hints: hints,
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },
};
