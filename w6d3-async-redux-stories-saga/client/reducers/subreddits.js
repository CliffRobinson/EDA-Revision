import {RECEIVE_POSTS} from '../actions'

function subreddits (state = [], action) {
  console.log(`I am le subreddit reducer, ang I jus got a ${action.type} action!!1!`)
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts

    default:
      return state
  }
}

export default subreddits
