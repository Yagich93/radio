const _ = require('lodash')

const playlistServiceMock = {
  generate: n => _.times(n, generateSong)
}

function generateSong() {
  return { id: 123, artist: 'Artist', title: 'Title', durationMs: 12345 }
}

module.exports = { playlistServiceMock }
