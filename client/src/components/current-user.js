import { h } from 'hyperapp' // eslint-disable-line no-unused-vars
import isLoggedIn from '../../../shared/is-logged-in'
import env from '../env'

export default ({ me }) => {
  if (!isLoggedIn(me)) {
    return (
      <div class='current-user'>
        <a class='btn btn-inline' href='/login'>login</a>
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
