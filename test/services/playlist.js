const _ = require('lodash')
const chai = require('chai')
const chaiString = require('chai-string')
const { Playlist } = require('../../src/services/playlist')
const { songDbMock } = require('../lib/song-db-mock')

chai.use(chaiString)
const { expect } = chai

const playlist = new Playlist(songDbMock)

describe('Playlist Service', () => {
  it('should return a list', async () => {
    const songs = playlist.generate()
    expect(songs).to.be.an('array')
  })

  it('should return requested number of songs', async () => {
    const n = 44
    const songs = playlist.generate(n)
    expect(songs).to.have.lengthOf(n)
  })

  it('should pick each next song starting with the last letter of previous', async () => {
    const songs = playlist.generate(3)
    const lastLetters = songs.map(({ title }) => _.last(title))
    const firstLetter = songs.map(({ title }) => _.first(title))
    expect(firstLetter[1]).to.equalIgnoreCase(lastLetters[0])
    expect(firstLetter[2]).to.equalIgnoreCase(lastLetters[1])
  })
})
