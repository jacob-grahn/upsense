// these actions don't directly modify the state, but
// they call functions in actions/index.js which do modify the state

import { room, store } from './store'
import { CREATE, VOTE, COMMENT, UPDATE } from '../../shared/constants'
import { isLoggedIn } from './utils/is-logged-in'
import { goto } from './utils/router'

export const metaActions = {
  createPost: ({ title, description }) => {
    const postId = title.replace(/\W/g, '-').toLowerCase()
    room.dispatch({type: CREATE, title, postId, description})
    room.dispatch({type: VOTE, postId})
    goto('/')
  },

  updatePost: ({ postId, title, description, status }) => {
    room.dispatch({type: UPDATE, postId, title, description, status})
    goto('/')
  },

  vote: (postId) => {
    const state = store.getState()
    if (!isLoggedIn(state.me)) return goto('/login')
    room.dispatch({type: VOTE, postId})
  },

  addComment: ({ postId, text }) => {
    const state = store.getState()
    if (!isLoggedIn(state.me)) return goto('/login')
    room.dispatch({type: COMMENT, postId, text})
  },

  goto
}
