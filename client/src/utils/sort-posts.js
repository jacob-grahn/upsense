import {
  TRENDING,
  TOP,
  NEW,
  PLANNED,
  IN_PROGRESS,
  OPEN,
  CLOSED,
  COMPLETE
} from '../../../shared/constants'

const filterStatus = (arr, status) => {
  const posts = arr.filter(post => {
    return post.status === status
  })
  return sortOnTrending(posts)
}

const sortOnTrending = (arr) => {
  const posts = arr.map(post => {
    const ageMs = new Date() - post.createdAt
    const ageDays = ageMs / 1000 / 60 / 60 / 24
    const trendScore = post.total / ageDays
    return Object.assign({}, post, {trendScore})
  })
  return sortOn(posts, 'trendScore')
}

const sortOn = (arr, key) => {
  return sort(arr, (a, b) => {
    if (a[key] < b[key]) return 1
    if (a[key] > b[key]) return -1
    return 0
  })
}

const sort = (arr, func) => {
  const copy = [...arr]
  copy.sort(func)
  return copy
}

// currying sure would be nice here
export const sorts = {
  [TRENDING]: (posts) => sortOnTrending(posts),
  [TOP]: (posts) => sortOn(posts, 'total'),
  [NEW]: (posts) => sortOn(posts, 'createdAt'),
  [PLANNED]: (posts) => filterStatus(posts, PLANNED),
  [IN_PROGRESS]: (posts) => filterStatus(posts, IN_PROGRESS),
  [OPEN]: (posts) => filterStatus(posts, OPEN),
  [CLOSED]: (posts) => filterStatus(posts, CLOSED),
  [COMPLETE]: (posts) => filterStatus(posts, COMPLETE)
}
