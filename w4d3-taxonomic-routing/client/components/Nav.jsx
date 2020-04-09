import React from 'react'
import {Link} from 'react-router-dom'

import ranks from '../../data/ranks'
import {capitaliseFirst} from './App'

export function Nav(props){

    return (<ul>
        <li><Link to={"/"}>Home</Link></li>
        {Object.keys(ranks).map((classificationName, i) => {
            return <li key={i}><Link to={"/list/"+classificationName} key={i}>{capitaliseFirst(classificationName)}</Link></li>
        })}
    </ul>)
}