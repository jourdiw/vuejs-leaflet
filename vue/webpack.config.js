const { join } = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const { HotModuleReplacementPlugin } = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const NODE_ENV = process.env.NODE_ENV;
const buildingForLocal = () => {
  return NODE_ENV === "development";
};

// const setPublicPath = () => {
//   let env = NODE_ENV;
//   if (env === "production") {
//     return "https://your-host.com/production/";
//   } else if (env === "staging") {
//     return "https://your-host.com/staging/";
//   } else {
//     return "/";
//   }
// };
// const extractCSS = new ExtractTextPlugin({
//   filename: "css/styles.[hash].css", //"[name].[contenthash].css",
//   disable: process.env.NODE_ENV === "development"
// });
// const extractHTML = new HtmlWebpackPlugin({
//   title: "History Search",
//   filename: "index.html",
//   inject: true,
//   template: setPath("/src/tpl/tpl.ejs"),
//   environment: process.env.NODE_ENV,
//   isLocalBuild: buildingForLocal(),
//   imgPath: !buildingForLocal() ? "assets" : "src/assets"
// });

module.exports = {
  entry: path.resolve(__dirname, "app.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      },
      {
        test: /.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            // Requires sass-loader@^8.0.0
            options: {
              implementation: require("sass"),
              sassOptions: {
                indentedSyntax: true // optional
              }
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: "svg-sprite-loader"
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader",
        query: {
          name: "[name].[ext]?[hash]",
          useRelativePath: buildingForLocal()
        }
      }
    ]
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      showErrors: true,
      template: join(__dirname, "public/index.html"),
      title: "History Search",
      // filename: "index.html",
      inject: true,
      environment: process.env.NODE_ENV,
      isLocalBuild: buildingForLocal(),
      imgPath: !buildingForLocal() ? "assets" : "src/assets"
    })
  ]
};
