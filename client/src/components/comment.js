import { h } from 'hyperapp' // eslint-disable-line no-unused-vars

export default ({ user, text, deleteComment }) => (
  <div class='comment'>
    <div class='name'>{user.name || user.userId}</div>
    <div class='text'>
      {text}
      <span class='btn-text' onclick={deleteComment}>[X]</span>
    </div>
  </div>
)
