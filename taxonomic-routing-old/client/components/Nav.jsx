import React from 'react'
import {Link} from 'react-router-dom'

import ranks from "../../data/ranks"

export default class Nav extends React.Component {

    render(){
        const rankList = Object.keys(ranks);
        return(
            <div className="nav">
                {rankList.map((rank, i) => 
                    (
                        <span key={`rank:${i}`}>
                            <Link to={`/list/${rank}`}> - {rank}</Link>
                        </span>)
                )}
            </div>
        ) 
    }
}