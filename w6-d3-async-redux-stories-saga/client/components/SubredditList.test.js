import React from 'react'
import {shallow} from 'enzyme'

import {Subreddit,  mapStateToProps}  from './SubredditList'

test('subredditList', ()=> {
    const subreddits = ["a", "b", "c"]
    const wrapper = shallow(<Subreddit subreddits={subreddits} />)
    expect(wrapper).toMatchSnapshot()
})

test('mapState', ()=> {
    expect(mapStateToProps({subreddits:"butts"})).toEqual({subreddits:"butts"})
})