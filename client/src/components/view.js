import { h } from 'hyperapp' // eslint-disable-line no-unused-vars
import Page from './page'
import CurrentUser from './current-user'

export default (state) => (actions) => (
  <div class='container'>
    <h1>UpSense</h1>
    <CurrentUser me={state.me} />
    <Page state={state} actions={actions} />
  </div>
)
