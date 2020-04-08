import React from 'react'

export function Rank({rank}) {
    return <React.Fragment>
        <h3>{rank.name}</h3>
        <p>{rank.description}</p>
    </React.Fragment>
}