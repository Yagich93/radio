const { expect } = require('chai')
const { Playlist } = require('../../src/services/playlist')

const playlist = new Playlist()

describe('Playlist Service', () => {
  it('should return a list', async () => {
    const songs = playlist.generate()
    expect(songs).to.be.an('array')
  })
})
