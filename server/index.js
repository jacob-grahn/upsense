const jiber = require('jiber-server')
const reducer = require('../shared/reducer')
const store = jiber.createStore({reducer})

store.start()
