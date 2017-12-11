const passport = require('koa-passport')

module.exports = (app) => {
  passport.serializeUser((user, done) => {
    done(null, user)
  })

  passport.deserializeUser((id, done) => {
    done(null, id)
  })

  app.use(passport.initialize())
  app.use(passport.session())
}
