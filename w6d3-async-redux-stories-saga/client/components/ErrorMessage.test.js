import React from 'react'
import {shallow} from 'enzyme'

import {ErrorMessage, mapStateToProps} from './ErrorMessage'

test('ErrorMessage', ()=> {
    const wrapper = shallow(<ErrorMessage error={{message:"lol butts lol"}} />)
    expect(wrapper).toMatchSnapshot()
})

test ('mapState', ()=> {
    expect(mapStateToProps({errorMessage:"butts"})).toEqual({errorMessage:"butts"})
})