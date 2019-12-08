const { expect } = require('chai')
const _ = require('lodash')

const { SongDb } = require('../../src/db/song-db')
const testDbJson = require('../lib/test-db.json')
const { TEST_SONGS } = require('../lib/test-songs')
const B_SONG = TEST_SONGS.find(({ title }) => title.startsWith('B'))

const songDb = new SongDb(testDbJson)

describe('Song DB', () => {
  it('should sample random song without arguments', async () => {
    const song = songDb.sample()
    expect(TEST_SONGS).to.deep.include.members([song])
  })

  it('should sample different songs', async () => {
    const songs = _.times(20, () => songDb.sample())
    const deduplicatedSongs = _.uniq(songs)
    expect(deduplicatedSongs).to.have.length.greaterThan(1)
  })

  it('should sample by first letter', async () => {
    const song = songDb.sampleByFirstLetter('B')
    expect(song).to.deep.equal(B_SONG)
  })

  it('should return null for not-found song', async () => {
    const song = songDb.sampleByFirstLetter('X')
    expect(song).to.deep.equal(null)
  })

  it('should be case-insensitive', async () => {
    const song = songDb.sampleByFirstLetter('b')
    expect(song).to.deep.equal(B_SONG)
  })

  it('should sample different songs by first letter', async () => {
    const songs = _.times(20, () => songDb.sampleByFirstLetter('c'))
    const deduplicatedSongs = _.uniq(songs)
    expect(deduplicatedSongs).to.have.length.greaterThan(1)
  })
})
