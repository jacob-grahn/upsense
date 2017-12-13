const { get } = require('lodash')
const reducer = require('../shared/reducer')
const jiber = require('jiber-server')
const postgres = require('jiber-db-postgres')
const { PG_USER, PG_HOST, PG_DB, PG_PASSWORD, PG_PORT } = require('./env')

const makeGuest = () => {
  return {
    userId: 'guest' + Math.round(Math.random() * 100000),
    name: 'guest'
  }
}

module.exports = async (app, server, sessionStore) => {
  // auth new logins
  const login = async (req) => {
    try {
      let user
      const res = {}
      const ctx = app.createContext(req, res)
      await sessionStore(ctx, () => {
        user = get(ctx, 'session.passport.user') || makeGuest()
      })
      return user
    } catch (e) {
      console.log('login error', e)
      return makeGuest()
    }
  }

  const db = await postgres.createDb({
    user: PG_USER,
    host: PG_HOST,
    database: PG_DB,
    password: PG_PASSWORD,
    port: PG_PORT
  })

  const store = jiber.createStore({ reducer, login, server, db })
  store.start()
}
