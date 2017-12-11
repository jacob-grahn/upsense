import store from '../store'
import { CREATE, VOTE, COMMENT } from '../../../shared/constants'

export default {
  createPost: ({ title, description }) => (state) => {
    const postId = title.replace(/\W/g, '-').toLowerCase()
    store.dispatch({type: CREATE, title, postId, description})
    return Object.assign({}, state, {posts: store.getState(), path: '/'})
  },
  vote: (postId) => (state) => {
    store.dispatch({type: VOTE, postId})
    return Object.assign({}, state, {posts: store.getState()})
  },
  addComment: ({ postId, text }) => (state) => {
    console.log('addComment', postId, text)
    store.dispatch({type: COMMENT, postId, text})
    return Object.assign({}, state, {posts: store.getState()})
  },
  updateData: (posts) => (state) => {
    const roomState = state.rooms['test'] // todo: set roomName variable somewhere
    Object.assign({}, roomState, {me: state.me}, {posts})
  },
  sort: (event) => (state) => Object.assign({}, state, {sort: event.target.value}),
  goto: (path) => (state) => Object.assign({}, state, {path})
}