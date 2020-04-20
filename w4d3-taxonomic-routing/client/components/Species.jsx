import React from 'react'
import {Link} from 'react-router-dom'

export function Species(props) {
    const { name, description, photo, kingdom,phylum, order,family,genus } = props

    return (<React.Fragment>
        <h4> LOOKOUT DIPSHITS ITS ONLY BLOODY</h4>
        <h2>{name}!!!!!!!!!!!!!</h2>
        <h4>SO CHECK YASELF</h4>

        <p>{description}</p>
        <img src={photo} />

        <ul>
            <li>Kingdom:<Link to={'/kingdoms/'+kingdom}>{kingdom}</Link></li>
            <li>Phylum:<Link to={'/phyla/'+phylum}>{phylum}</Link></li>
            <li>Class:<Link to={'/classes/'+props.class}>{props.class}</Link></li>
            <li>Order:<Link to={'/orders/'+order}>{order}</Link></li>
            <li>Family:<Link to={'/families/'+family}>{family}</Link></li>
            <li>Genus:<Link to={'/genera/'+genus}>{genus}</Link></li>
        </ul>
    </React.Fragment>)
}