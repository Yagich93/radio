const { Api } = require('./api')
const { Playlist } = require('./services/playlist')
const { SongDb } = require('./db/song-db')
const dbJson = require('../assets/db.json')

class Launcher {
  constructor() {
    this.songDb = new SongDb(dbJson)
    this.playlist = new Playlist(this.songDb)
    this.api = new Api(this.playlist)
  }

  launch() {
    this.api.listen()
  }
}

module.exports = { Launcher }
