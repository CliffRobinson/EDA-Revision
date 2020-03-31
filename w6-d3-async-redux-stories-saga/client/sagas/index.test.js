import {expectSaga} from 'redux-saga-test-plan'
import request from 'superagent'

import { rootSaga } from './index'
import { subreddits, fetchPosts } from './subreddits'
import { requestPosts, REQUEST_POSTS, receivePosts } from '../actions'

test('subreddits', ()=> {
    expect(true).toBeTruthy()
    return expectSaga(rootSaga)
        .dispatch(requestPosts('newzealand'))
        .call(request.get, `/api/v1/reddit/subreddit/newzealand`)
        .put(receivePosts())
        .run()
})

test('log', ()=> {
    const gen = fetchPosts({sub:"hello"})
    console.log(gen.next().value.payload.args)
})