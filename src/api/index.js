const Koa = require('koa')

class Api {
  constructor() {
    // Setup koa
    this.koa = new Koa()
  }

  listen(options = {}) {
    const defaults = { port: 8080 }
    const { port } = { ...options, ...defaults }

    // Start http instance
    this.koa.listen(port)
    console.log('Server listening on port', port)
  }
}

module.exports = { Api }
