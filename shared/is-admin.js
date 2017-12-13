const isLoggedIn = require('./is-logged-in')

module.exports = (user) => {
  return isLoggedIn(user) && user.admin
}
