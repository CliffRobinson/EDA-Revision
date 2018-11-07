import React from 'react'

import species from '../../data/species'

const deplural = {
  kingdoms: 'kingdom',
  phyla: 'phylum',
  classes: 'class',
  orders: 'order',
  families: 'family',
  genera: 'genus'
}

export default class SpeciesListing extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { rank, classification } = this.props.match.params

    const theseSpecies = species.filter(specie => {
      return specie[deplural[rank]] == classification
    })

    console.log(theseSpecies)

    return (
      <div className='speciesList'>
        {theseSpecies.map((specie, i) => {
          return (
            <div className='speciesListing' key={`species:${i}`}>
              <h2>{specie.name}</h2>
              <p>{specie.description}</p>
              <img src={specie.photo} />
            </div>
          )
        })}
      </div>
    )
  }
}
