import { h } from 'hyperapp' // eslint-disable-line no-unused-vars
import PostCreate from './post-create'
import PostList from './post-list'
import PostInspect from './post-inspect'
import Controls from './controls'
import Login from './login'

export default (state) => (actions) => {
  if (state.path === '/create') {
    return (
      <div class='container'>
        <h1>UpSense</h1>
        <PostCreate goto={actions.goto} createPost={actions.createPost} />
      </div>
    )
  } else if (state.path === '/login') {
    return (
      <div class='container'>
        <h1>UpSense</h1>
        <Login />
      </div>
    )
  } else if (state.path.indexOf('/posts/') === 0) {
    const postId = state.path.substr(7)
    if (state.posts && state.posts[postId]) {
      return (
        <div class='container'>
          <h1>UpSense</h1>
          <PostInspect post={state.posts[postId]} {...actions} />
        </div>
      )
    }
  }

  // fallback to default route
  return (
    <div class='container'>
      <h1>UpSense</h1>
      <Controls me={state.me} {...actions} />
      <PostList sort={state.sort} posts={state.posts} {...actions} />
    </div>
  )
}
