import { h } from 'hyperapp' // eslint-disable-line no-unused-vars
import isLoggedIn from '../../../shared/is-logged-in'

export default ({ me }) => {
  if (!isLoggedIn(me)) {
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
