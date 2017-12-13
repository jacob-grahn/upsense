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

const openStatuses = [PLANNED, IN_PROGRESS, OPEN]

const filterByStatus = (arr, statuses) => {
  if (!Array.isArray(statuses)) {
    statuses = [statuses]
  }
  const posts = arr.filter(post => {
    return statuses.indexOf(post.status) !== -1
  })
  return posts
}

const sortOnTrending = (arr) => {
  const posts = arr.map(post => {
    const ageMs = new Date().getTime() - new Date(post.createdAt).getTime()
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
  [TRENDING]: (posts) => sortOnTrending(filterByStatus(posts, openStatuses)),
  [TOP]: (posts) => sortOn(filterByStatus(posts, openStatuses), 'total'),
  [NEW]: (posts) => sortOn(filterByStatus(posts, openStatuses), 'createdAt'),
  [PLANNED]: (posts) => filterByStatus(posts, PLANNED),
  [IN_PROGRESS]: (posts) => filterByStatus(posts, IN_PROGRESS),
  [OPEN]: (posts) => filterByStatus(posts, OPEN),
  [CLOSED]: (posts) => filterByStatus(posts, CLOSED),
  [COMPLETE]: (posts) => filterByStatus(posts, COMPLETE)
}
