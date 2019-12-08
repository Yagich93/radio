const _ = require('lodash')

const SONG_KEY_MAP = { _name: 'title', _duration: 'durationMs', _id: 'id' }

class SongDb {
  constructor(dbJson) {
    this.songs = this._parseDbJson(dbJson)
    this.indexByFirstLetter = this._createIndexByFirstLetter(this.songs)
  }

  sample(options = {}) {
    const { firstLetter } = options

    if (!firstLetter) {
      return _.sample(this.songs)
    }

    const songIndexes = this.indexByFirstLetter[firstLetter.toLowerCase()]

    if (!songIndexes) {
      return null
    }

    const randomIndex = _.sample(songIndexes)
    return this.songs[randomIndex]
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

  _createIndexByFirstLetter(songs) {
    const indexByFirstLetter = {}
    songs.forEach((song, index) => {
      const firstLetter = _.first(song.title).toLowerCase()
      indexByFirstLetter[firstLetter] = indexByFirstLetter[firstLetter] || []
      indexByFirstLetter[firstLetter].push(index)
    })
    return indexByFirstLetter
  }
}

module.exports = { SongDb }
