import React from 'react'
import {shallow} from 'enzyme'

import {ErrorMessage, mapStateToProps} from './ErrorMessage'
import { TestScheduler } from 'jest'

test('ErrorMessage', ()=> {
    const wrapper = shallow(<ErrorMessage error={{message:"lol butts lol"}} />)
})

test ('mapState', ()=> {
    expect(mapStateToProps({errorMessage:"butts"})).toEqual("butts")
})