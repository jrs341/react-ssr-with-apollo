import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class DataBox extends Component {
	static propTypes = {

	}

	static defaultProps = {
		sixHourDelta: 0,
		twelveHourDelta: 0,
		twentyFourHourDelta: 0,
		fortyEightHourDelta: 0,
		svgHeight: 40,
		svgWidth: 80
	}

	constructor (props) {
		super (props)

		this.state = {

		}
	}

	render () {
		const { sixHourDelta, twelveHourDelta, twentyFourHourDelta, fortyEightHourDelta, lastReading } = this.props
		const sixHourColor = sixHourDelta < 0
      ? 'green'
      : sixHourDelta === 0
        ? 'yellow'
        : 'red'
    const twelveHourColor = twelveHourDelta < 0
      ? 'green'
      : twelveHourDelta === 0
        ? 'yellow'
        : 'red'
    const twentyFourHourColor = twentyFourHourDelta < 0
      ? 'green'
      : twentyFourHourDelta === 0
        ? 'yellow'
        : 'red'
    const fortyEightHourColor = fortyEightHourDelta < 0
      ? 'green'
      : fortyEightHourDelta === 0
        ? 'yellow'
        : 'red'
    let sixY = ''
    const sixHourArrow = sixHourDelta < 0
      ? sixY = '11.5,8 12.5,9 13.5,8'
      : sixHourDelta === 0
        ? sixY = '0,0'
        : sixY = '11.5,8 12.5,7 13.5,8'
    let twelveY = ''
    const twelveHourArrow = twelveHourDelta < 0
      ? twelveY = '16.5,8 17.5,9 18.5,8'
      : twelveHourDelta === 0
        ? twelveY = '0,0'
        : twelveY = '16.5,8 17.5,7 18.5,8'
    let twentyFourY = ''
    const twentyFourHourArrow = twentyFourHourDelta < 0
      ? twentyFourY = '22.5,8 23.5,9 24.5,8'
      : twentyFourHourDelta === 0
        ? twentyFourY = '0,0'
        : twentyFourY = '22.5,8 23.5,7 24.5,8'
    let fortyEightY
    const fortyEightHourArrow = fortyEightHourDelta < 0
      ? fortyEightY = '29.5,8 30.5,9 31.5,8'
      : fortyEightHourDelta === 0
        ? fortyEightY = '0,0'
        : fortyEightY = '29.5,8 30.5,7 31.5,8'
		return(
      <g>
			<rect x='6' y='0' width='27' height='10' style={{strokeWidth:'.2', stroke:'orange', fill:'white'}}/>
      <text x='7' y='2' style={{fill: 'black', fontSize:'1.5'}}> Last Observation: {lastReading.date.slice(0,16)} </text>
      <text x='7' y='4' style={{fill: 'black', fontSize:'1.5'}}> Last Observed Value: {lastReading.level}  ft</text>
      <text x='7' y='6' style={{fill: 'black', fontSize:'1.5'}}> Trend:  6hr  </text>
      <text x='16' y='6' style={{fill: 'black', fontSize:'1.5'}}> 12hr </text>
      <text x='22' y='6' style={{fill: 'black', fontSize:'1.5'}}> 24hr </text>
      <text x='29' y='6' style={{fill: 'black', fontSize:'1.5'}}> 48hr </text>
      <line x1='12.5' y1='7' x2='12.5' y2='9' style={{stroke: `${sixHourColor}`, strokeWidth: '.2'}}/>
      <line x1='17.5' y1='7' x2='17.5' y2='9' style={{stroke: `${twelveHourColor}`, strokeWidth: '.2'}}/>
      <line x1='23.5' y1='7' x2='23.5' y2='9' style={{stroke: `${twentyFourHourColor}`, strokeWidth: '.2'}}/>
      <line x1='30.5' y1='7' x2='30.5' y2='9' style={{stroke: `${fortyEightHourColor}`, strokeWidth: '.2'}}/>
      <polyline points={sixY} style={{stroke: `${sixHourColor}`, strokeWidth: '.2', fill: 'none'}}/>
      <polyline points={twelveY} style={{stroke: `${twelveHourColor}`, strokeWidth: '.2', fill: 'none'}}/>
      <polyline points={twentyFourY} style={{stroke: `${twentyFourHourColor}`, strokeWidth: '.2', fill: 'none'}}/>
      <polyline points={fortyEightY} style={{stroke: `${fortyEightHourColor}`, strokeWidth: '.2', fill: 'none'}}/>
      </g>
		)
	}
}