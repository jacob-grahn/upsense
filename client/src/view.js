import { h } from 'hyperapp' // eslint-disable-line no-unused-vars
import Page from './components/page'
import CurrentUser from './components/current-user'
import { metaActions } from './meta-actions'

export default (state) => (actions) => {
  const allActions = Object.assign({}, actions, metaActions)
  return (
    <div class='upsense'>
      <Page state={state} actions={allActions} />
      <CurrentUser me={state.me} />
    </div>
  )
}
