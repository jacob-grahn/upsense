import { h } from 'hyperapp' // eslint-disable-line no-unused-vars
import isLoggedIn from '../../../shared/is-logged-in'
import env from '../env'

export default ({ me, goto }) => {
  if (!isLoggedIn(me)) {
    return (
      <div class='current-user'>
        <span class='btn btn-inline' onclick={() => goto('/login')}>login</span>
      </div>
    )
  } else {
    return (
      <div class='current-user'>
        {me.name}
        <a class='btn btn-inline' href={`${env.host}/logout`}>logout</a>
      </div>
    )
  }
}
