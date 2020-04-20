import React from 'react'
import {Link} from 'react-router-dom'

import ranks from "../../data/ranks"

export default class Classification extends React.Component {

    render() {
        // console.log("Classification data")
        // console.log(this.props.match)
        const thisRankName = this.props.match.params.rank
        const thisClassName = this.props.match.params.classification

        // console.log(thisRankName, thisClassName)

        const thisClass = ranks[thisRankName].find( 
            (aClass) => {
                const bool = (aClass.name == thisClassName)
                //console.log(`Comparing ${aClass.name} to ${thisClassName}, output is ${bool}`)
                return bool
            })
        

        //console.log(thisClass)

        return (
            <div> 
                <h2>{thisClass.name}</h2>
                <p>{thisClass.description}</p>
                <Link to={`${this.props.match.url}/species`} >Show Species</Link> 
            </div>
        )

    }
}