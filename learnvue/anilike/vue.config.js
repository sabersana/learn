module.exports = {
  devServer: {
    proxy: {
      '/anis': {
        target: 'http://localhost:3000'
      },
      '/users': {
        target: 'http://localhost:3000'
      },
      '/users/*': {
        target: 'http://localhost:3000'
      },
      '/anis/*': {
        target: 'http://localhost:3000'
      }
    }
  }
}
