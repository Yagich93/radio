const _ = require('lodash')

class Playlist {
  constructor(songDb) {
    this.songDb = songDb
  }

  generate(n) {
    const firstSong = this.songDb.sample()
    const songs = [firstSong]
    _.times(n - 1, () => this._appendNextSong(songs))
    return songs
  }

  _appendNextSong(songs) {
    const lastSong = _.last(songs)
    const nextSong = this._getNextSongByTitle(lastSong.title)
    songs.push(nextSong)
  }

  _getNextSongByTitle(title) {
    const lastLetter = _.last(title)
    const nextSong = this.songDb.sample({ firstLetter: lastLetter })
    if (!nextSong) {
      return this._getNextSongByTitle(title.slice(0, -1))
    }
    return nextSong
  }
}

module.exports = { Playlist }