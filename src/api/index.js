const Koa = require('koa')
const Router = require('@koa/router')

const loadPlaylistRoutes = require('./routes/playlist')

class Api {
  constructor(playlistService) {
    this.playlistService = playlistService

    // Setup koa and router
    this.koa = new Koa()
    this.router = new Router()

    // Load routes
    loadPlaylistRoutes(this)

    // Use routes
    this.koa.use(this.router.routes())
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
