import { room } from '../store'
import { CREATE, VOTE, COMMENT } from '../../../shared/constants'
import { isLoggedIn } from '../utils/is-logged-in'
import { goto } from '../utils/router'

const actions = {
  createPost: ({ title, description }) => (state) => {
    if (!isLoggedIn(state.me)) return goto('/login')
    const postId = title.replace(/\W/g, '-').toLowerCase()
    room.dispatch({type: CREATE, title, postId, description})
    room.dispatch({type: VOTE, postId})
    setTimeout(() => goto('/'), 0)
    return Object.assign({}, state, {posts: room.getState()})
  },

  vote: (postId) => (state) => {
    if (!isLoggedIn(state.me)) return goto('/login')
    room.dispatch({type: VOTE, postId})
    return Object.assign({}, state, {posts: room.getState()})
  },

  addComment: ({ postId, text }) => (state) => {
    if (!isLoggedIn(state.me)) return goto('/login')
    room.dispatch({type: COMMENT, postId, text})
    return Object.assign({}, state, {posts: room.getState()})
  },

  updateData: (serverState) => (state) => {
    const roomState = serverState.rooms['test'].confirmed // todo: set roomName variable
    return Object.assign({}, state, {me: serverState.me}, {posts: roomState})
  },

  updateSort: (event) => (state) => Object.assign(
    {},
    state,
    {sort: event.target.value}
  ),

  setPath: (path) => (state) => {
    return Object.assign({}, state, {path})
  },

  goto: (path) => () => {
    goto(path)
  }
}

export { actions as default }
