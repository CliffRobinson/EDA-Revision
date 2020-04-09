import React from 'react'
import {Link} from 'react-router-dom'
import species from "../../data/species"

const switcher = {
    kingdoms:"kingdom",
    phyla:"phylum",
    classes:"class",
    orders:"order",
    familes:"family",
    genera:"genus"
}

export function Rank({rank, classification}) {
    return <React.Fragment>
        <h3>{rank.name}</h3>
        <p>{rank.description}</p>
        <h4>Sample Species:</h4>
        <ul>
            {species.filter(
                specie => {
                    return specie[switcher[classification]] == rank.name
                }
            ).map(item => <li><Link to={`/species/${item.id}`}>{item.name}</Link></li>)}
        </ul>
    </React.Fragment>
}