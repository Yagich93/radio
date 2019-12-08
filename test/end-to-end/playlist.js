const _ = require('lodash')
const { expect } = require('chai')
const { Launcher } = require('../../src/launcher')
const { client } = require('../lib/client')

const launcher = new Launcher()

describe('Playlist End-to-end', () => {
  before('launch server', () => {
    launcher.start()
  })

  after('launch server', () => {
    launcher.stop()
  })

  it('should generate requested number of songs', async () => {
    const length = 55
    const { data: songs } = await client.get('/playlist', { params: { length } })
    expect(songs).to.have.lengthOf(55)
  })

  it('should generate different songs', async () => {
    const { data: songs } = await client.get('/playlist')
    const deduplicatedSongs = _.uniq(songs)
    expect(deduplicatedSongs).to.have.length.greaterThan(1)
  })
})
