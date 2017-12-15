import * as jiber from 'jiber-client'
import reducer from '../../shared/reducer'
import env from './env'

const url = env.host.replace('https:', 'wss:').replace('http:', 'ws:') + '/ws'
const maxPeers = 0
const store = jiber.createStore({ url, reducer, maxPeers })
const room = store.createRoom(env.roomId)
export { store, room }
