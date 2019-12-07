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
    const lastSong = songs[songs.length - 1]
    const [firstLetter] = lastSong.title
    const nextSong = this.songDb.sample({ firstLetter })
    songs.push(nextSong)
  }
}

module.exports = { Playlist }
