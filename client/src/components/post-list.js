import { h } from 'hyperapp' // eslint-disable-line no-unused-vars
import Post from './post'
import { sorts } from '../utils/sort-posts'

export default ({ posts, vote, goto, sort }) => {
  if (!posts) return <span>No posts yet...</span>

  const postArr = Object.values(posts)
  const sortFunc = sorts[sort]
  const sortedPosts = sortFunc(postArr)
  if (sortedPosts.length > 0) {
    return <ul class='post-list'>
      {sortedPosts.map(post => <li><Post {...post} vote={vote} goto={goto} /></li>)}
    </ul>
  } else {
    return <span>No posts yet...</span>
  }
}
