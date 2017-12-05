import * as jiber from 'jiber-client'
import reducer from '../../shared/reducer'
const room = jiber.createStore({url: 'ws:\\localhost', reducer}).createRoom('test')
export { room as default }
