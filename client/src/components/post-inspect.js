import { h } from 'hyperapp' // eslint-disable-line no-unused-vars
import Comment from './comment'
import Vote from './vote'
import isAdmin from '../../../shared/is-admin'

export default ({ me, post, goto, vote, addComment, deleteComment, deletePost, editPost }) => {
  const adminButtons = () => {
    if (isAdmin(me)) {
      return (
        <span class='admin-buttons'>
          <button class='btn btn-text' onclick={() => goto(`/edit/${post.postId}`)}>Edit</button>
          <button class='btn btn-text' onclick={() => deletePost(post.postId)}>Delete</button>
        </span>
      )
    } else {
      return (<span />)
    }
  }

  return (
    <div class='post-inspect'>
      <button class='btn btn-text' onclick={() => goto('/')}>Back to All Posts</button>
      {adminButtons()}
      <div class='top'>
        <Vote vote={vote} me={me} {...post} />
        <div class='title'>{post.title}</div>
      </div>

      <Comment user={post.owner} text={post.description} deleteComment={() => {}} />

      {post.comments.map((comment, index) => {
        return <Comment
          {...comment}
          admin={isAdmin(me)}
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
}
