const _ = require('lodash')

const SONG_KEY_MAP = { _name: 'title', _duration: 'durationMs', _id: 'id' }

class SongDb {
  constructor(dbJson) {
    this.songs = this._parseDbJson(dbJson)
  }

  sample() {
    return _.sample(this.songs)
  }

  _parseDbJson(dbJson) {
    const songs = []
    dbJson.Library.Artist.map(artistJson => {
      const artistSongs = this._parseArtistJson(artistJson)
      songs.push(...artistSongs)
    })
    return songs
  }

  _parseArtistJson(artistJson) {
    const songsJson = _.castArray(artistJson.Song)
    return songsJson.map(songJson => {
      const song = this._parseSongJson(songJson)
      return { ...song, artist: artistJson._name }
    })
  }

  _parseSongJson(songJson) {
    return _.mapKeys(songJson, (val, key) => SONG_KEY_MAP[key])
  }
}

module.exports = { SongDb }
