import "core-js/stable";
import "regenerator-runtime/runtime";

import request from 'superagent'
import {call, put, takeLatest} from 'redux-saga/effects'

import {REQUEST_POSTS, receivePosts} from '../actions'

export function* fetchPosts(action) {
    console.log("I'm the saga, an I fetch der posts!")
    const posts = yield call(request.get, `/api/v1/reddit/subreddit/${action.sub}`)
    console.log(`Posts got, lookit em:`)
    console.log(posts)
    console.log('putten em in redux!')
    yield put(receivePosts(posts.body))
}

export function* subreddits() {
    yield takeLatest(REQUEST_POSTS, fetchPosts)
}