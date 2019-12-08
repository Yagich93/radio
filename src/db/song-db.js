class SongDb {
  constructor(dbJson) {
    this.songs = this._parseDbJson(dbJson)
  }

  sample() {}

  _parseDbJson(dbJson) {
    const songs = []
    dbJson.Library.Artist.map(artistJson => {
      const artistSongs = artistJson.Song.map(({ _name, _id, _duration }) => ({
        artist: artistJson._name,
        durationMs: _duration,
        id: _id,
        title: _name
      }))
      songs.push(...artistSongs)
    })
    return songs
  }
}

module.exports = { SongDb }
