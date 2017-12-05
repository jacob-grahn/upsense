import { app } from 'hyperapp'
import store from './store'
import actions from './actions'
import view from './components'
import { TRENDING } from '../../shared/constants'

const state = { posts: store.getState(), sort: TRENDING, path: '/' }
const hyper = app({ state, actions, view })
store.subscribe(hyper.updatePosts)
