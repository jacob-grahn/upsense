const post = require('./post')
const isLoggedIn = require('./is-logged-in')

module.exports = (state = {}, action) => {
  // make sure there is a postId and the user is logged in
  const id = action.postId
  if (!id) return state
  if (!isLoggedIn(action.$user)) return state

  // run the post reducer
  const postState = post(state[id], action)

  // if a post is deleted, remove it from the dictionary
  if (!postState) {
    const copy = Object.assign({}, state)
    delete copy[id]
    return copy
  }

  // return an updated dictionary with a pointer to the new post
  return Object.assign({}, state, {
    [id]: post(state[id], action)
  })
}
