module.exports = (user) => {
  return user && user.userId && user.userId.indexOf('guest:') !== 0
}
