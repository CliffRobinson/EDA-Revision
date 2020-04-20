import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import { Nav } from './Nav'
import { Home } from './Home'
import { Classifications} from './Classifications'
import { Rank } from './Rank'
import {Species} from './Species'

import ranks from '../../data/ranks'
import specieses from '../../data/species'

export const capitaliseFirst = (str) => (str[0].toUpperCase()+str.substring(1))

const App = (props) => {

  return (
    <Router>
      <React.Fragment>
        <h1> HERE IS THE HEADING !!</h1>
        <div style={{ display: "flex" }}>
          <div style={{ width: "250px" }}><Nav /></div>
          <div>
            <Route exact path="/" component={Home} />
            {Object.keys(ranks)
              .map((classificationName, i) => (<Route key={i} exact path={`/list/${classificationName}`}  
              render={()=> <Classifications name={capitaliseFirst(classificationName)} 
              classifications={ranks[classificationName]} />}/>))
            }
            {Object.keys(ranks).map(
              (classificationName) => ranks[classificationName].map(
                (rank, j) => {
                return <Route key={classificationName+j} exact path={`/${classificationName}/${rank.name}`} 
                render={()=> <Rank classification={classificationName} rank={rank}/>} 
                />
                }
              )
            )}
            {specieses.map(
              (specie, k) => {
              return <Route key={"specie"+k} exact path={`/species/${specie.id}`} 
              render={()=><Species {... specie}
              />} />
              }
            )}
          </div>
        </div>
      </React.Fragment>
    </Router>

  )
}

export default App

