import React from 'react'

import Pixel from './Pixel'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    let butts = []

    for (let i = 0; i < 1500; i++) {
      butts.push({
        color1: randomHexColor(),
        color2: randomHexColor(),
        angle: randomAngle()
      })
    }

    this.state = {
      butts: butts
    }

  }

  componentDidMount() {
    setInterval(
      () => {
        //console.log("refreshing")
        const newButts = this.state.butts.slice()
        const newPixel = {
          color1: randomHexColor(),
          color2: randomHexColor(),
          angle: randomAngle()
        }
        const randIndex = Math.floor(Math.random() * newButts.length)
        newButts[randIndex] = newPixel
        this.setState({
          butts:newButts
        }) 
      }, 1
    )
  }

  render () {
    //console.log("rendering")
    const { butts } = this.state
    return butts.map(butt => (
      <Pixel color1={butt.color1} color2={butt.color2} angle={butt.angle} />
    ))
  }
}

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

const randomAngle = () => `${Math.floor(Math.random() * 360)}deg`
