const axios = require('axios')
const { expect } = require('chai')
const { Api } = require('../../src/api')
const { playlistServiceMock } = require('../lib/playlist-service-mock')

const PORT = 8080

new Api(playlistServiceMock).listen({ port: PORT })
const client = axios.create({
  baseURL: `http://localhost:${PORT}/`
})

describe('Playlist HTTP API', () => {
  it('should return status 200', async () => {
    const { status } = await client.get('/playlist')
    expect(status).to.equal(200)
  })

  it('should return a list', async () => {
    const { data } = await client.get('/playlist')
    expect(data).to.be.an('array')
  })

  it('should return 20 items by default', async () => {
    const { data } = await client.get('/playlist')
    expect(data).have.lengthOf(20)
  })

  it('should return requested number of items', async () => {
    const length = 35
    const { data } = await client.get('/playlist', { params: { length } })
    expect(data).have.lengthOf(length)
  })

  it('should return items in correct format', async () => {
    const { data } = await client.get('/playlist')
    data.map(song => expect(song).to.have.all.keys('artist', 'durationMs', 'id', 'title'))
  })
})
