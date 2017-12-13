import { h } from 'hyperapp' // eslint-disable-line no-unused-vars
import Comment from './comment'

export default ({ post, goto, vote, addComment, deleteComment, deletePost, editPost }) => {
  const output = (
    <div class='post-inspect'>
      <button class='btn btn-text' onclick={() => goto('/')}>Back to All Posts</button>
      &nbsp;<button class='btn btn-text' onclick={() => goto(`/edit/${post.postId}`)}>Edit</button>
      &nbsp;<button class='btn btn-text' onclick={() => deletePost(post.postId)}>Delete</button>
      <div class='top'>
        <div class='vote' onclick={() => vote(post.postId)}>
          <div class='arrow-up' />
          {post.total}
        </div>
        <div class='title'>{post.title}</div>
      </div>

      <Comment user={post.owner} text={post.description} deleteComment={() => {}} />

      {post.comments.map((comment, index) => {
        return <Comment
          {...comment}
          deleteComment={() => deleteComment(post.postId, index)}
        />
      })}

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
