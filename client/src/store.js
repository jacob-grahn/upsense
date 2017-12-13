import * as jiber from 'jiber-client'
import reducer from '../../shared/reducer'
import { CREATE, VOTE, COMMENT, UPDATE } from '../../../shared/constants'

const actionCreators = {
  comment: (postId, text) => {
    return {type: COMMENT, postId, text}
  },
  create: (postId, title, description) => {
    return {type: CREATE, title, postId, description}
  },
  update: (postId, title, description, status) => {
    return {type: UPDATE, postId, title, description, status}
  },
  vote: (postId) => {
    return {type: VOTE, postId}
  }
}

const url = 'ws:\\localhost:3000'

const store = jiber.createStore({ url, reducer, actionCreators })
const room = store.createRoom('test')
export { store, room }
