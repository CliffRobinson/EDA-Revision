import React from 'react'
import {Link} from 'react-router-dom'

export function Classifications({name, classifications}){

    return (<React.Fragment>
        <h2>{name}</h2>
        <ul>
        {classifications.map(
            (classification, i) => <li><Link to={`/${name}/${classification.name}`}>{classification.name}</Link></li>
        )}
        </ul>
    </React.Fragment>
    )
}