import * as jiber from 'jiber-client'
import reducer from '../../shared/reducer'

const url = 'ws:\\localhost:3000'
const store = jiber.createStore({ url, reducer })
const room = store.createRoom('test')
export { store, room }
