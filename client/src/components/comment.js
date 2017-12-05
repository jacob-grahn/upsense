import { h } from 'hyperapp' // eslint-disable-line no-unused-vars

export default ({ user, text }) => (
  <div class='comment'>
    <div class='name'>{user.name || user.userId}</div>
    <div class='text'>{text}</div>
  </div>
)
