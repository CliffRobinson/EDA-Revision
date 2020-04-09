import React, { Fragment } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import Rank from "./Rank"
import Classification from './Classification';
import SpeciesListing from './SpeciesListing'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <h1>Welcome to Tax Town!</h1>
        <h3>Don't worry Objectivists, it's Taxonomy, not Taxation</h3>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/list/:rank" component={Rank}/>
        <Route path="/rank/:rank/:classification" component={Classification}/>
        <Route path="/rank/:rank/:classification/species" component={SpeciesListing}/>
        <Route exact path="/test" render={
          () => <p >lol</p>
        }/>
      </div>
    </Router>
  )
}

export default App



