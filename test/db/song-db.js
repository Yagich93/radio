const { expect } = require('chai')
const { SongDb } = require('../../src/db/song-db')
const testDbJson = require('../lib/test-db.json')

const { TEST_SONGS } = require('../lib/test-songs')

const songDb = new SongDb(testDbJson)

describe('Song DB', () => {
  it('should sample random song without arguments', async () => {
    const song = songDb.sample()
    expect(TEST_SONGS).to.deep.include.members([song])
  })
})
