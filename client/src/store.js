import * as jiber from 'jiber-client'
import reducer from '../../shared/reducer'
import env from './env'

const protocol = window.location.protocol === 'https:' ? 'wss://' : 'ws://'
const url = env.wsUrl || (protocol + window.location.host + '/ws')
const store = jiber.createStore({ url, reducer })
const room = store.createRoom(env.roomId)
export { store, room }
