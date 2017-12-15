const env = process.env

module.exports = {
  PORT: env.PORT || 3000,

  CERT: env.CERT,
  KEY: env.KEY,

  ADMIN_USER_ID: env.ADMIN_USER_ID,

  SESSION_SECRET: env.SESSION_SECRET || 'aaa',
  TWITTER_KEY: env.TWITTER_KEY || 'aaa',
  TWITTER_SECRET: env.TWITTER_SECRET || 'aaa',

  PG_USER: env.PG_USER || 'upsense',
  PG_HOST: env.PG_HOST || 'localhost',
  PG_DB: env.PG_DB || 'upsense',
  PG_PASSWORD: env.PG_PASSWORD || 'aaa',
  PG_PORT: env.PG_PORT || 5432,

  WIDGET_HOST: env.WIDGET_HOST || '/'
}
