import { h } from 'hyperapp' // eslint-disable-line no-unused-vars
import Page from './page'

export default (state) => (actions) => (
  <div class='container'>
    <h1>UpSense</h1>
    <Page state={state} actions={actions} />
  </div>
)
