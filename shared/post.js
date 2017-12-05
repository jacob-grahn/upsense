const votes = require('./votes')
const { CREATE, UPDATE, VOTE, COMMENT } = require('./constants')

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
        status: action.status,
        total: 0,
        comments: []
      }
    }

    case UPDATE: {
      if (action.$userId !== state.owner.userId && !action.$user.admin) return state
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

    default: {
      return state
    }
  }
}
