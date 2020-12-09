module.exports = {
    devServer: {
      proxy: {
        "^/api/": {
          target: "http://localhost:3080",
          pathRewrite: { "^/api/": "/api/" },
          changeOrigin: true,
          logLevel: "debug"
        }
      }
    }
  };