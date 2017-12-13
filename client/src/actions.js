const actions = {
  updateData: (serverState) => (state) => {
    const roomState = serverState.rooms['test'].optimistic // todo: set roomName variable
    return Object.assign({}, state, {me: serverState.me}, {posts: roomState})
  },

  updateSort: (event) => (state) => Object.assign(
    {},
    state,
    {sort: event.target.value}
  ),

  setPath: (path) => (state) => {
    return Object.assign({}, state, {path})
  }
}

export { actions as default }
