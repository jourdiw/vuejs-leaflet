module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: "/",
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: true,
  productionSourceMap: undefined,
  parallel: undefined,
  lintOnSave: undefined,
  devServer: {
    proxy: {
      "/": {
        target: "http://localhost:8000",
        ws: false
      }
    }
  }
};
