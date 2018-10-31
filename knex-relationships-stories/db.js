const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  addUser,
  addProfile
}

function getUsers (testConn) {
  const conn = testConn || connection
  return conn('users')
    .join("profiles", "users.id", "profiles.user_Id")
    .select()
}

function getUser (id, testConn) {
  const conn = testConn || connection
  return conn('users')
    .join("profiles", "users.id", "profiles.user_Id")
    .where('id', id).first()
}

function addUser(name, email, testConn) {
  const conn = testConn || connection
  return conn('users')
    .insert({
      name: name,
      email: email
    })
}

function addProfile(user_id, url, img_url, testConn) {
  const conn = testConn || connection
  return conn('profiles')
    .insert({
      user_id: user_id,
      url:url,
      img_url: img_url,
    })
}