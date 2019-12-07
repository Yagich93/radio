const { expect } = require('chai')
const { SongDb } = require('../../src/db/song-db')
const testDbJson = require('../lib/test-db.json')

const testSongs = extractSongsFromJson(testDbJson)

const songDb = new SongDb(testDbJson)

describe('Playlist Service', () => {
  it('should sample random song without arguments', async () => {
    const song = songDb.sample()
    expect(testSongs).to.deep.include.members([song])
  })
})

function extractSongsFromJson(dbJson) {
  const [artistJson] = dbJson.Library.Artist
  const songs = artistJson.Song.map(({ _name, _id, _duration }) => ({
    artist: artistJson._name,
    durationMs: _duration,
    id: _id,
    title: _name
  }))
  return songs
}
