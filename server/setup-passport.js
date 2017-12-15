const passport = require('koa-passport')
const route = require('koa-route')
const { WIDGET_HOST } = require('./env')

module.exports = (app) => {
  passport.serializeUser((user, done) => {
    done(null, user)
  })

  passport.deserializeUser((id, done) => {
    done(null, id)
  })

  app.use(passport.initialize())
  app.use(passport.session())

  app.use(route.get('/logout', (ctx) => {
    ctx.logout()
    ctx.redirect(WIDGET_HOST)
  }))
}
