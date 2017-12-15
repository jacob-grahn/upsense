const bodyParser = require('koa-bodyparser')
const session = require('koa-session')
const { SESSION_SECRET } = require('./env')

module.exports = (app) => {
  app.use(bodyParser())
  app.keys = [SESSION_SECRET]
  const sessionStore = session(app)
  app.use(sessionStore)
  return sessionStore
}
