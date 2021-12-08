module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    },
    publicPath: process.env.NODE_ENV === 'production'
      ? '/nm2022/'
      : '/' ,
      outputDir: "dist",
      lintOnSave: true,
      runtimeCompiler: false,
      productionSourceMap: false,
      devServer: {
        open: process.platform === "darwin",
        port: 8000,
        https: false,
        hotOnly: false,
        proxy: null,
        disableHostCheck: true,
      },
}