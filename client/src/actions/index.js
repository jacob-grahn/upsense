import { room } from '../store'
import { CREATE, VOTE, COMMENT, UPDATE } from '../../../shared/constants'
import { isLoggedIn } from '../utils/is-logged-in'
import { goto } from '../utils/router'

const actions = {
  createPost: ({ title, description }) => (state) => {
    const postId = title.replace(/\W/g, '-').toLowerCase()
    room.dispatch({type: CREATE, title, postId, description})
    room.dispatch({type: VOTE, postId})
    goto('/')
  },

  updatePost: ({ postId, title, description, status }) => (state) => {
    room.dispatch({type: UPDATE, postId, title, description, status})
    goto('/')
  },

  vote: (postId) => (state) => {
    if (!isLoggedIn(state.me)) return goto('/login')
    setTimeout(() => {
      room.dispatch({type: VOTE, postId})
    })
  },

  addComment: ({ postId, text }) => (state) => {
    if (!isLoggedIn(state.me)) return goto('/login')
    room.dispatch({type: COMMENT, postId, text})
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
