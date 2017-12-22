import { h } from 'hyperapp' // eslint-disable-line no-unused-vars

export default ({ vote, total, postId, votes, me }) => (
  <div class='vote' onclick={() => vote(postId)}>
    <div class={(votes[me.userId]) ? 'arrow-up arrow-highlighted' : 'arrow-up'} />
    {total}
  </div>
)
