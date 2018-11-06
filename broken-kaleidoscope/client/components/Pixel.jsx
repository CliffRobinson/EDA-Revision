import React from 'react'

// export default class Pixel extends React.Component {
//   constructor (props) {
//     console.log("Pixel constructing")
//     super(props)

//     this.state = {
//       style: {
//         height: '50px',
//         width: '50px',
//         background: `linear-gradient(${props.angle},${props.color2},${props.color1})`,
//         border: '2px solid black'
//       }
//     }
//     // this.refresh = this.refresh.bind(this);
//   }

//   render () {
//     console.log("Pixel rendering", this.state.style)
//     return <div style={this.state.style} className='pixel' />
//   }
// }

function Pixel(props) {
    return <div style={{
            height: '25px',
            width: '25px',
            background: `linear-gradient(${props.angle},${props.color2},${props.color1})`,
            //border: '2px solid black'
        }} className='pixel' />
}

export default Pixel