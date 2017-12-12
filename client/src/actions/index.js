import { room } from '../store'
import { CREATE, VOTE, COMMENT } from '../../../shared/constants'
import { isLoggedIn } from '../utils/is-logged-in'

const goto = (path) => (state) => Object.assign({}, state, {path})

export default {
  createPost: ({ title, description }) => (state) => {
    if (!isLoggedIn(state.me)) return goto('/login')(state)
    const postId = title.replace(/\W/g, '-').toLowerCase()
    room.dispatch({type: CREATE, title, postId, description})
    return Object.assign({}, state, {posts: room.getState(), path: '/'})
  },

  vote: (postId) => (state) => {
    if (!isLoggedIn(state.me)) return goto('/login')(state)
    room.dispatch({type: VOTE, postId})
    return Object.assign({}, state, {posts: room.getState()})
  },

  addComment: ({ postId, text }) => (state) => {
    if (!isLoggedIn(state.me)) return goto('/login')(state)
    room.dispatch({type: COMMENT, postId, text})
    return Object.assign({}, state, {posts: room.getState()})
  },

  updateData: (serverState) => (state) => {
    console.log('updateData', serverState)
    const roomState = serverState.rooms['test'] // todo: set roomName variable
    Object.assign({}, state, {me: serverState.me}, roomState)
  },

  sort: (event) => (state) => Object.assign(
    {},
    state,
    {sort: event.target.value}
  ),

  goto
}
