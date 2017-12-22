import { h } from 'hyperapp' // eslint-disable-line no-unused-vars
import { OPEN } from '../../../shared/constants'
import Vote from './vote'

export default ({ post, me, vote, goto }) => (
  <div class='sm-post'>
    <Vote vote={vote} me={me} {...post} />
    <div class='content' onclick={() => goto(`/posts/${post.postId}`)}>
      <div class='title'>
        {post.title}
        {post.status === OPEN ? '' : (<span class='status'>{post.status}</span>)}
      </div>
      <div class='description'>{post.description}</div>
    </div>
    <div class='comments' onclick={() => goto(`/posts/${post.postId}`)}>
      <svg fill='#ccc' height='24' width='24'>
        <path d='M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z' />
        <path d='M0 0h24v24H0z' fill='none' />
      </svg>
      <span class='comment-count'>{post.comments ? post.comments.length : 0}</span>
    </div>
  </div>
)
