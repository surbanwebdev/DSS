module.exports = {
  devServer: {
    public: "daxor.com",
    host: "0.0.0.0",
    disableHostCheck: true
  },
  configureWebpack: {
    devtool: 'source-map'
  }
};
