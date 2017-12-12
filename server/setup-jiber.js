const { get } = require('lodash')
const reducer = require('../shared/reducer')
const jiber = require('jiber-server')

const makeGuest = () => {
  return {
    userId: 'guest' + Math.round(Math.random() * 100000),
    name: 'guest'
  }
}

module.exports = (app, server, sessionStore) => {
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

  const store = jiber.createStore({ reducer, login, server })
  store.start()
}
