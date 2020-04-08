import React from 'react'
import {Link} from 'react-router-dom'

import ranks from '../../data/ranks'
import {capitaliseFirst} from './App'

export function Nav(){
    return (<ul>
        {Object.keys(ranks).map((classificationName, i) => {
            return <li><Link to={"/list/"+classificationName} key={i}>{capitaliseFirst(classificationName)}</Link></li>
        })}
    </ul>)
}