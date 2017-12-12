import { h } from 'hyperapp' // eslint-disable-line no-unused-vars
import constants from '../../../shared/constants'
import { isLoggedIn } from '../utils/is-logged-in'

export default ({ goto, updateSort, me }) => (
  <div class='controls'>
    <div class='showing'>
      Showing &nbsp;
      <select onchange={updateSort}>
        <option value={constants.TRENDING}>Trending</option>
        <option value={constants.TOP}>Top</option>
        <option value={constants.NEW}>New</option>
        <option value={constants.PLANNED}>Planned</option>
        <option value={constants.IN_PROGRESS}>In Progress</option>
        <option value={constants.OPEN}>Open</option>
        <option value={constants.COMPLETE}>Complete</option>
        <option value={constants.CLOSED}>Closed</option>
      </select>
    </div>
    <div class='group'>
      <button class='btn btn-primary' onclick={() => isLoggedIn(me) ? goto('/create') : goto('/login')}>
        <svg height='24' width='24' xmlns='http://www.w3.org/2000/svg'>
          <path d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z' />
          <path d='M0 0h24v24H0z' fill='none' />
        </svg>
      </button>
    </div>
  </div>
)
