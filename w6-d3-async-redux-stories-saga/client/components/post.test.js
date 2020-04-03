import React from 'react'
import {shallow} from 'enzyme'

import Post from './Post'

test('post, no img', ()=> {
    const post = {
        title:"lol!",
        created:1585211045,
        url: 'www.google.com',
        thumbnail: "self"
    }

    const wrapper = shallow(<Post post={post} />)
    expect(wrapper).toMatchSnapshot()
})

test('post, img', ()=> {
    const post = {
        title:"lol!",
        created:1585211045,
        url: 'www.google.com',
        thumbnail: "www.picture.com/random.png"
    }

    const wrapper = shallow(<Post post={post} />)
    expect(wrapper).toMatchSnapshot()
})