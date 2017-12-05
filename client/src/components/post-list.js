import { h } from 'hyperapp' // eslint-disable-line no-unused-vars
import Post from './post'

export default ({ posts, vote, goto }) => {
  const postArr = Object.values(posts)
  if (postArr.length > 0) {
    return <ul class='post-list'>
      {postArr.map(post => <li><Post {...post} vote={vote} goto={goto} /></li>)}
    </ul>
  } else {
    return <span>No posts yet...</span>
  }
}
