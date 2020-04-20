/* global test expect */
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import ranks from '../data/ranks'
import specieses from '../data/species'

import App from '../client/components/App'
import {Nav} from '../client/components/Nav'
import {Home} from '../client/components/Home'
import {Classifications} from '../client/components/Classifications'
import {Rank} from '../client/components/Rank'
import {Species} from '../client/components/Species'

Enzyme.configure({adapter: new Adapter()})

test('<App />', () => {
  const wrapper = shallow(<App />)
  expect(wrapper).toMatchSnapshot()
})

test('<Nav />', () => {
  const wrapper = shallow(<Nav />)
  expect(wrapper).toMatchSnapshot()
})

test('<Home />', () => {
  const wrapper = shallow(<Home />)
  expect(wrapper).toMatchSnapshot()
})

test('<Classifications />', ()=> {
  const wrapper = shallow(<Classifications name="Kingdoms" classifications={ranks.kingdoms}/>)
  expect(wrapper).toMatchSnapshot;
})

test('<Rank />', ()=> {
  const wrapper = shallow(<Rank rank={ranks.kingdoms[0]}/>)
  expect(wrapper).toMatchSnapshot;
})

test('<species />', ()=> {
  const wrapper = shallow(<Species {...specieses[0]} />)
  expect(wrapper).toMatchSnapshot;
})