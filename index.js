const { Api } = require('./src/api')
const { Playlist } = require('./src/services/playlist')

const playlist = new Playlist()
const api = new Api(playlist)
api.listen()
