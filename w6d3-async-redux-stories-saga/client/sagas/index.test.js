import {expectSaga} from 'redux-saga-test-plan'
import request from 'superagent'
import {call} from 'redux-saga-test-plan/matchers'

import { rootSaga } from './index'
import { subreddits, fetchPosts } from './subreddits'
import { requestPosts, REQUEST_POSTS, receivePosts, RECEIVE_POSTS } from '../actions'

const fakePosts = {
    body:[
    {data:"post1"},
    {data:"post2"}
]}

test('subreddits', ()=> {
    expect(true).toBeTruthy()
    return expectSaga(rootSaga)
        .dispatch(requestPosts('newzealand'))
        .call(request.get, `/api/v1/reddit/subreddit/newzealand`)
        .provide([
            [call(request.get, `/api/v1/reddit/subreddit/newzealand`), fakePosts, ]
        ])
        .put(receivePosts(fakePosts.body))
        .silentRun()
})

// test('log', ()=> {
//     const gen = fetchPosts({sub:"hello"})
//     console.log(gen.next().value.payload.args)
// })