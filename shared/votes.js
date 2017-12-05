const { VOTE } = require('./constants')

module.exports = (state = {}, action) => {
  switch (action.type) {
    case VOTE: {
      // this adds their vote
      if (!state[action.$userId]) {
        return Object.assign({}, state, {[action.$userId]: 1})
      // if they have already voted, this removes their vote
      } else {
        return Object.assign({}, state, {[action.$userId]: 0})
      }
    }
    default:
      return state
  }
}
