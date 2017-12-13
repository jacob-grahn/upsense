const votes = require('./votes')
const {
  COMMENT,
  CREATE,
  DELETE_COMMENT,
  DELETE_POST,
  UPDATE,
  VOTE,
  OPEN
} = require('./constants')
const isAdmin = require('./is-admin')

module.exports = (state = {votes: {}}, action) => {
  switch (action.type) {
    case CREATE: {
      if (state.owner) return state
      return {
        postId: action.postId,
        title: action.title,
        description: action.description,
        owner: {
          userId: action.$userId,
          name: action.$user.name
        },
        createdAt: action.$timeMs,
        updatedAt: action.$timeMs,
        status: OPEN,
        total: 0,
        comments: []
      }
    }

    case UPDATE: {
      if (!isAdmin(action.$user)) return state
      return Object.assign({}, state, {
        title: action.title,
        description: action.description,
        updatedAt: action.$timeMs,
        status: action.status
      })
    }

    case VOTE: {
      const newVotes = votes(state.votes, action)
      const ammounts = Object.values(newVotes)
      return Object.assign({}, state, {
        votes: newVotes,
        total: ammounts.reduce((total, vote) => total + vote, 0)
      })
    }

    case COMMENT: {
      if (!action.text || action.text.length <= 4) return state
      const comments = state.comments.slice()
      comments.push({
        user: {
          userId: action.$userId,
          name: action.$user.name
        },
        text: action.text
      })
      return Object.assign({}, state, {comments})
    }

    case DELETE_COMMENT: {
      if (!isAdmin(action.$user)) return state
      const comments = state.comments.slice()
      comments.splice(action.index, 1)
      return Object.assign({}, state, {comments})
    }

    case DELETE_POST: {
      if (!isAdmin(action.$user)) return state
      return undefined
    }

    default: {
      return state
    }
  }
}
