const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const session = require('koa-session')
const http = require('http')
const { SESSION_SECRET } = require('./env')
const serveFiles = require('./serve-files')
const setupTwitter = require('./setup-twitter')
const setupPassport = require('./setup-passport')
const setupJiber = require('./setup-jiber')

const app = new Koa()
const server = http.createServer(app.callback())

// session
app.keys = [SESSION_SECRET]
const sessionStore = session(app)
app.use(sessionStore)

// body parser
app.use(bodyParser())

// setup
setupPassport(app)
setupTwitter(app)
setupJiber(app, server, sessionStore).catch(console.log)
serveFiles(app)

// start server
const port = process.env.PORT || 3000
server.listen(port, () => console.log('Server listening on', port))
