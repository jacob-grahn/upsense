// these actions don't directly modify the state, but they directly
// or indirectly call  functions in actions.js which do modify the state

import { room, store } from './store'
import { COMMENT, CREATE, DELETE_COMMENT, DELETE_POST, UPDATE, VOTE } from '../../shared/constants'
import isLoggedIn from '../../shared/is-logged-in'
import isAdmin from '../../shared/is-admin'
import { goto } from './utils/router'

export const metaActions = {
  createPost: ({ title, description }) => {
    const postId = title.replace(/\W/g, '-').toLowerCase()
    room.dispatch({type: CREATE, title, postId, description})
    room.dispatch({type: VOTE, postId})
    goto(`/posts/${postId}`)
  },

  deleteComment: (postId, index) => {
    const state = store.getState()
    if (isAdmin(state.me)) {
      room.dispatch({ type: DELETE_COMMENT, postId, index })
    }
  },

  deletePost: (postId) => {
    const state = store.getState()
    if (isAdmin(state.me)) {
      room.dispatch({ type: DELETE_POST, postId })
      goto('/')
    }
  },

  updatePost: ({ postId, title, description, status }) => {
    const state = store.getState()
    if (isAdmin(state.me)) {
      room.dispatch({ type: UPDATE, postId, title, description, status })
      goto('/')
    }
  },

  vote: (postId) => {
    const state = store.getState()
    if (isLoggedIn(state.me)) {
      room.dispatch({ type: VOTE, postId })
    } else {
      goto('/login')
    }
  },

  addComment: ({ postId, text }) => {
    const state = store.getState()
    if (isLoggedIn(state.me)) {
      room.dispatch({ type: COMMENT, postId, text })
    } else {
      return goto('/login')
    }
  },

  goto
}
