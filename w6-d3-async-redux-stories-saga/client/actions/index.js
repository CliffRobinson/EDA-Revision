export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'

export const requestPosts = (sub) => {
  return {
    type: REQUEST_POSTS,
    sub
  }
}

export const receivePosts = (posts) => {
  console.log("I'm teh receive posts action, chukkin em in redux! Lookit:")
  console.log(posts)
  return {
    type: RECEIVE_POSTS,
    posts: posts.map(post => post.data)
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}
