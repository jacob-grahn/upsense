// upsense only serves three files, so this seems a simple enough way to do it

const fs = require('fs')
const route = require('koa-route')

module.exports = (app) => {
  app.use(route.get('/', (ctx) => {
    ctx.type = 'html'
    ctx.body = fs.createReadStream('../client/dist/index.html')
  }))

  app.use(route.get('*/bundle.css', (ctx) => {
    ctx.type = 'text/css'
    ctx.body = fs.createReadStream('../client/dist/bundle.css')
  }))

  app.use(route.get('*/bundle.js', (ctx) => {
    ctx.type = 'application/javascript'
    ctx.body = fs.createReadStream('../client/dist/bundle.js')
  }))

  // catch all, this should be the last route
  app.use(route.get('/*', (ctx) => {
    ctx.type = 'html'
    ctx.body = fs.createReadStream('../client/dist/index.html')
  }))
}
