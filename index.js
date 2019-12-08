const { Launcher } = require('./src/launcher')

const { PORT = 8080 } = process.env

const launcher = new Launcher()

launcher.start({ port: parseInt(PORT) })
