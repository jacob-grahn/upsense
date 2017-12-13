const TwitterStrategy = require('passport-twitter')
const passport = require('koa-passport')
const route = require('koa-route')
const { ADMIN_USER_ID, TWITTER_KEY, TWITTER_SECRET } = require('./env')

module.exports = (app) => {
  const twitter = new TwitterStrategy({
    consumerKey: TWITTER_KEY,
    consumerSecret: TWITTER_SECRET,
    callbackURL: '/auth/twitter/callback'
  },
  (token, tokenSecret, profile, cb) => {
    // avatar: profile.photos[0].value
    const account = {
      userId: `twitter:${profile.id}`,
      name: profile.displayName
    }
    if (account.userId === ADMIN_USER_ID) {
      account.admin = true
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
