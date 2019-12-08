const axios = require('axios')

const DEFAULT_PORT = 8080

const client = axios.create({
  baseURL: `http://localhost:${DEFAULT_PORT}/`
})

module.exports = { client }
