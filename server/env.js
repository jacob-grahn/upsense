module.exports = {
  SESSION_SECRET: process.env.SESSION_SECRET || 'aaa',
  TWITTER_KEY: process.env.TWITTER_KEY || 'aaa',
  TWITTER_SECRET: process.env.TWITTER_SECRET || 'aaa',

  PG_USER: process.env.PG_USER || 'upsense',
  PG_HOST: process.env.PG_HOST || 'localhost',
  PG_DB: process.env.PG_DB || 'upsense',
  PG_PASSWORD: process.env.PG_PASSWORD || 'aaa',
  PG_PORT: process.env.PG_PORT || 5432
}
