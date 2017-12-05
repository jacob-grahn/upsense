import { h } from 'hyperapp' // eslint-disable-line no-unused-vars
import Comment from './comment'

export default ({ post, goto, vote, addComment, editPost }) => {
  const output = (
    <div class='post-inspect'>
      <button class='btn btn-text' onclick={() => goto('/')}>Back to All Posts</button>
      <div class='top'>
        <div class='vote' onclick={() => vote(post.postId)}>
          <div class='arrow-up' />
          {post.total}
        </div>
        <div class='title'>{post.title}</div>
      </div>

      <Comment user={post.owner} text={post.description} />

      {post.comments.map(comment => <Comment {...comment} />)}

      <input id='comment-box' type='text' placeholder='Add a comment...' onkeydown={(e) => {
        if (e.keyCode === 13) {
          const box = document.getElementById('comment-box')
          const text = box.value
          box.value = ''
          addComment({postId: post.postId, text})
        }
      }} />
    </div>
  )

  return output
}
