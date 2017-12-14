import * as jiber from 'jiber-client'
import reducer from '../../shared/reducer'
import env from './env'

const url = ((window.location.protocol === 'https:') ? 'wss://' : 'ws://') + window.location.host
const store = jiber.createStore({ url, reducer })
const room = store.createRoom(env.roomId)
export { store, room }
