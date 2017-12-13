import { h } from 'hyperapp' // eslint-disable-line no-unused-vars
import PostCreate from './post-create'
import PostList from './post-list'
import PostInspect from './post-inspect'
import PostUpdate from './post-update'
import Controls from './controls'
import Login from './login'

export default ({ state, actions }) => {
  if (state.path === '/create') {
    return <PostCreate goto={actions.goto} createPost={actions.createPost} />
  } else if (state.path === '/login') {
    return <Login />
  } else if (state.path.indexOf('/posts/') === 0) {
    const postId = state.path.substr(7)
    if (state.posts && state.posts[postId]) {
      return <PostInspect me={state.me} post={state.posts[postId]} {...actions} />
    }
  } else if (state.path.indexOf('/edit/') === 0) {
    const postId = state.path.substr(6)
    if (state.posts && state.posts[postId]) {
      return <PostUpdate post={state.posts[postId]} {...actions} />
    }
  }

  // fallback to default route
  return (
    <div>
      <Controls me={state.me} {...actions} />
      <PostList sort={state.sort} posts={state.posts} {...actions} />
    </div>
  )
}
