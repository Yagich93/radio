const axios = require('axios')
const { expect } = require('chai')
const { Api } = require('../../src/api')

const PORT = 8080

new Api().listen({ port: PORT })
const client = axios.create({
  baseURL: `http://localhost:${PORT}/`
})

describe('Playlist HTTP API', () => {
  it('should return status 200', async () => {
    const { status } = await client.get('/playlist')
    expect(status).to.equal(200)
  })
})
