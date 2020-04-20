import React from 'react'
import {shallow, mount} from 'enzyme'
import {LoadSubreddit} from './LoadSubreddit'
import {requestPosts} from '../actions'

test('loadSubreddit renders', ()=> {
    const wrapper = shallow(<LoadSubreddit> <p>hello</p></LoadSubreddit>)
    expect(wrapper).toMatchSnapshot()
})

test('dispatches action', ()=> {
    const fakeDispatch = jest.fn()
    const comp = shallow(<LoadSubreddit dispatch={fakeDispatch}/>)
    comp.displayname = "LoadSubreddit"
    expect(comp.find('button')).toHaveLength(1);
    comp.find('button').at(0).props().onClick()
    expect(fakeDispatch).toHaveBeenCalledWith(requestPosts('newzealand'))
})