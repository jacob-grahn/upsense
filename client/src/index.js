import { app } from 'hyperapp'
import { store, room } from './store'
import actions from './actions'
import view from './components'
import { TRENDING } from '../../shared/constants'

const state = {
  me: undefined,
  posts: room.getState(),
  sort: TRENDING,
  path: '/'
}
const hyper = app({ state, actions, view })
store.subscribe(hyper.updateData)
