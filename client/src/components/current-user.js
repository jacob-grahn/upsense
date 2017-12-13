import { h } from 'hyperapp' // eslint-disable-line no-unused-vars

export default ({ me }) => {
  if (!me || !me.provider) {
    return (
      <div class='current-user'>
        <a href='/login'>Login</a>
      </div>
    )
  } else {
    return (
      <div class='current-user'>
        <a href='/logout'>{me.name}</a>
      </div>
    )
  }
}
