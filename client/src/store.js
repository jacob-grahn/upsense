import * as jiber from 'jiber-client'
import reducer from '../../shared/reducer'
import env from './env'

const url = 'ws:\\localhost:3000'
const store = jiber.createStore({ url, reducer })
const room = store.createRoom(env.roomId)
export { store, room }
