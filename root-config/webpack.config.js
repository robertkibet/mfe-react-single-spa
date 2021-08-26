const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "buerto"; //organization name is global, ensure it matches throughout
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  // externals defines dependencies that will be in browser modules
  // are not compiled immediately but retained and when app runs, it will be resolved
  const externals = {
    externals: {
      react: "react",
      "react-dom": "react-dom",
    },
  };
  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    ...externals,
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
          bucketUrl: "https://storage.googleapis.com/demo-spa/import-map.json",
        },
      }),
    ],
  });
};
