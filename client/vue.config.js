module.exports = {
  devServer: {
    public: "localhost",
    host: "localhost",
    disableHostCheck: true,
    proxy: {
      '^/api': {
        target: 'http://localhost:8081',
        changeOrigin: true
      },
    }
  },
  configureWebpack: {
    devtool: 'source-map'
  }
};
