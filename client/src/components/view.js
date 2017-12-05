import { h } from 'hyperapp' // eslint-disable-line no-unused-vars
import PostCreate from './post-create'
import PostList from './post-list'
import PostInspect from './post-inspect'
import Controls from './controls'

export default (state) => (actions) => {
  if (state.path === '/') {
    return (
      <div class='container'>
        <h1>UpSense</h1>
        <Controls goto={actions.goto} sort={actions.sort} />
        <PostList goto={actions.goto} posts={state.posts} vote={actions.vote} />
      </div>
    )
  } else if (state.path === '/create') {
    return (
      <div class='container'>
        <h1>UpSense</h1>
        <PostCreate goto={actions.goto} createPost={actions.createPost} />
      </div>
    )
  } else if (state.path.indexOf('/posts/') === 0) {
    const postId = state.path.substr(7)
    return (
      <div class='container'>
        <h1>UpSense</h1>
        <PostInspect post={state.posts[postId]} goto={actions.goto} vote={actions.vote} addComment={actions.addComment} editPost={actions.editPost} />
      </div>
    )
  }
}
