import { app } from 'hyperapp'
import { store, room } from './store'
import actions from './actions'
import view from './components'
import { TRENDING } from '../../shared/constants'
import { init as initRouter } from './utils/router'

const state = {
  me: undefined,
  posts: room.getState(),
  sort: TRENDING,
  path: '/'
}

const hyper = app({ state, actions, view })
initRouter(hyper)

store.subscribe(hyper.updateData)
