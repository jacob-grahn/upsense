import { h } from 'hyperapp' // eslint-disable-line no-unused-vars

export default ({ admin, user, text, deleteComment }) => (
  <div class='comment'>
    <div class='name'>{user.name || user.userId}</div>
    <div class='text'>
      {text}
      {admin ? (<span class='btn btn-inline' onclick={deleteComment}>delete</span>) : ''}
    </div>
  </div>
)
