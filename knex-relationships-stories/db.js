const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  addUser,
  editUser,
  addProfile,
  editProfile,
  getPosts,
  getPost
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

function editUser(id, name, email, testConn) {
  const conn = testConn || connection
  return conn('users')
  .where('id', id)
  .update({
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

function editProfile(user_id, url, img_url, testConn) {
  const conn = testConn || connection
  return conn('profiles')
    .where('user_id', user_id)
    .update({
      user_id: user_id,
      url:url,
      img_url: img_url,
    })
}

function getPosts(testConn) {
  const conn = testConn || connection
  return conn('users')
    .select('*', "posts.user_id as post_user_id")
    .join('posts', 'posts.user_id', 'users.id')
    .join('profiles', 'profiles.user_id', 'users.id')
}

function getPost(id, testConn) {
  const conn = testConn || connection
  return conn('users')
    .select('*', "posts.user_id as post_user_id")
    .join('posts', 'posts.user_id', 'users.id')
    .join('profiles', 'profiles.user_id', 'users.id')
    .where('posts.id', id)
    .first()
}