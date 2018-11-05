import React from 'react'

function getColor (level) {
  const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet'
  ]
  return colors[level % colors.length]
}

export default class Circle extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      level: props.level,
      moused: false,
      cx: props.cx,
      cy: props.cy,
      r: props.r
    }

    this.handleMouseOver = this.handleMouseOver.bind(this)
  }

  handleMouseOver () {
    this.setState({
      moused: true
    })
  }

  render () {
    const { level, moused, cx, cy, r } = this.state
    if (moused) {
      return (
        <React.Fragment>
          <circle
            fill={getColor(level)}
            onMouseOver={this.handleMouseOver}
            cx={cx}
            cy={cy}
            r={r}
          />
          <Circle level={level+1} r={r / 2} cx={cx + r} cy={cy} />
          <Circle level={level+1} r={r / 2} cx={cx - r} cy={cy} />
          <Circle level={level+1} r={r / 2} cx={cx} cy={cy + r} />
          <Circle level={level+1} r={r / 2} cx={cx} cy={cy - r} />
        </React.Fragment>
      )
    } else {
      return (
        <circle
          fill={getColor(level)}
          onMouseOver={this.handleMouseOver}
          cx={cx}
          cy={cy}
          r={r}
        />
      )
    }
  }
}
