import React from 'react'
import {Link} from 'react-router-dom'

import ranks from '../../data/ranks'

export default class Rank extends React.Component {
  render () {
    // console.log(this.props.match)
    const thisRankName = this.props.match.params.rank
    const thisRank = ranks[thisRankName]

    // console.log(`${thisRankName} is:`)
    // console.log(...thisRank)
    return (
      <div className='rank'>
        <h3>{thisRankName}</h3>
        <p> dis rank is rank yo </p>
        <ul>
          {thisRank.map((rank, key) => {
            return ( 
                <li key={`rank:${key}`}> 
                    <Link to={`/rank/${thisRankName}/${rank.name}`}>{rank.name}</Link>
                </li> )
          })}
        </ul>
      </div>
    )
  }
}
