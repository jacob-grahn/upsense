const TwitterStrategy = require('passport-twitter')
const passport = require('koa-passport')
const route = require('koa-route')

const TWITTER_KEY = process.env.TWITTER_KEY
const TWITTER_SECRET = process.env.TWITTER_SECRET

module.exports = (app) => {
  const twitter = new TwitterStrategy({
    consumerKey: TWITTER_KEY,
    consumerSecret: TWITTER_SECRET,
    callbackURL: '/auth/twitter/callback'
  },
  (token, tokenSecret, profile, cb) => {
    const account = {
      userId: profile.id,
      name: profile.displayName,
      provider: profile.provider,
      avatar: profile.photos[0].value
    }
    cb(null, account)
  })

  passport.use(twitter)

  app.use(route.get('/auth/twitter',
    passport.authenticate('twitter')
  ))

  app.use(route.get('/auth/twitter/callback',
    passport.authenticate('twitter', {
      failureRedirect: '/',
      successRedirect: '/'
    })
  ))
}
