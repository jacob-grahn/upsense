import * as jiber from 'jiber-client'
import reducer from '../../shared/reducer'

const store = jiber.createStore({ url: 'ws:\\localhost:3000', reducer })
const room = store.createRoom('test')
export { store, room }
