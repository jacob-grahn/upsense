import { app } from 'hyperapp'
import { store, room } from './store'
import actions from './actions'
import view from './view'
import { TRENDING } from '../../shared/constants'
import { init as initRouter } from './utils/router'

const state = {
  me: undefined,
  posts: room.getState(),
  sort: TRENDING,
  path: '/'
}

const container = document.getElementById('upsense')

const hyper = app({ state, actions, view }, container)
initRouter(hyper)

store.subscribe(hyper.updateData)
