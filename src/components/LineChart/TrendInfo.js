import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class TrendInfo extends Component {
	static propTypes = {

	}

  constructor (props) {
    super (props)

    this.arrowStyle = this.arrowStyle.bind(this)
    this.renderPolyLine = this.renderPolyLine.bind(this)

  }

  arrowStyle(delta) {
    return {
      stroke: delta,
      strokeWidth: '.2',
      fill: 'none'
    }
  }

  renderPolyLine(props) {
    const arrows = []
    for (var key in props) {
      let points = ''
      let x = ''
      let y = ''
      let x1 = ''
      let x2 = ''
      let y1 = ''
      let y2 = ''
      let text = ''
      const textStyle = {
        fill: 'black',
        fontSize:'1.5'
      }
      switch(key) {
        case 'sixHourDelta':
          x = '7'
          y = '6'
          x1 = '12.5'
          y1 = '7'
          x2 = '12.5'
          y2 = '9'
          text = 'Trend:  6hr'
          if (props[key] == 'green') {
             points = '11.5,8 12.5,9 13.5,8'
          } else if (props[key] == 'yellow') {
             points = '0,0'
          } else {
             points = '11.5,8 12.5,7 13.5,8'
          }
        break
        case 'twelveHourDelta':
          x = '16'
          y = '6'
          x1 = '17.5'
          y1 = '7'
          x2 = '17.5'
          y2 = '9'
          text = '12hr'
          if (props[key] == 'green') {
             points = '16.5,8 17.5,9 18.5,8'
          } else if (props[key] == 'yellow') {
             points = '0,0'
          } else {
             points = '16.5,8 17.5,7 18.5,8'
          }
        break
        case 'twentyFourHourDelta':
          x = '22'
          y = '6'
          x1 = '23.5'
          y1 = '7'
          x2 = '23.5'
          y2 = '9'
          text = '24hr'
          if (props[key] == 'green') {
             points = '22.5,8 23.5,9 24.5,8'
          } else if (props[key] == 'yellow') {
             points = '0,0'
          } else {
             points = '22.5,8 23.5,7 24.5,8'
          }
        break
        case 'fortyEightHourDelta':
          x = '28'
          y = '6'
          x1 = '29.5'
          y1 = '7'
          x2 = '29.5'
          y2 = '9'
          text = '48hr'
          if (props[key] == 'green') {
             points = '28.5,8 29.5,9 30.5,8'
          } else if (props[key] == 'yellow') {
             points = '0,0'
          } else {
             points = '28.5,8 29.5,7 30.5,8'
          }
        break
        default:
          null
      }
        arrows.push([
          <text x = {x} y = {y} style={textStyle}> {text} </text>,
          <line x1 = {x1} y1 = {y1} x2 = {x2} y2 = {y2} style={this.arrowStyle(props[key])}/>,
          <polyline points={points} style={this.arrowStyle(props[key])}/>])
    }
    return arrows
  }

	render () {
		const { sixHourDelta, twelveHourDelta, twentyFourHourDelta, fortyEightHourDelta } = this.props

    if (sixHourDelta != undefined) {
      return(
      <g>{this.renderPolyLine(this.props)}</g>
      )
    } else {
      return(
        <text x='7' y='2' style={{fill: 'black', fontSize:'1.5'}}> loading </text>
      )
    }
	}
}