const { Api } = require('./src/api')
const { Playlist } = require('./src/services/playlist')
const { SongDb } = require('./src/db/song-db')
const dbJson = require('./assets/db.json')

const songDb = new SongDb(dbJson)
const playlist = new Playlist(songDb)
const api = new Api(playlist)

api.listen()
