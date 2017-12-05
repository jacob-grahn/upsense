const post = require('./post')

module.exports = (state = {}, action) => {
  const id = action.postId
  if (!id) return state

  return Object.assign({}, state, {
    [id]: post(state[id], action)
  })
}
