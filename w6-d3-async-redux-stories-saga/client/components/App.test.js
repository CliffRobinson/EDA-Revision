import React from 'react'
import {shallow} from 'enzyme'

import App from './App'

test('App.jest', ()=> {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
})