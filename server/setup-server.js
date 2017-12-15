const fs = require('fs')
const https = require('https')
const http = require('http')
const { PORT, CERT, KEY } = require('./env')

module.exports = (app) => {
  let server

  // use https if a CERT and KEY are provided
  if (CERT && KEY) {
    const options = {
      cert: fs.readFileSync(CERT),
      key: fs.readFileSync(KEY)
    }
    server = https.createServer(options, app.callback())
  } else {
    server = http.createServer(app.callback())
  }

  // start server
  server.listen(PORT, () => console.log('Server listening on', PORT))

  return server
}
