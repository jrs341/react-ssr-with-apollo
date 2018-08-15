import React, {Component} from 'react'
import PropTypes from 'prop-types'

import TrendInfo from './TrendInfo'

export default class DataBox extends Component {
	static propTypes = {

	}

	static defaultProps = {
		lastReading:{
      date: '0',
      value: '0'
    },
    sixHourDelta: '0',
    twelveHourDelta: '0',
    twentyFourHourDelta: '0',
    fortyEightHourDelta: '0'
	}

	render () {
		const { lastReading, sixHourDelta, twelveHourDelta, twentyFourHourDelta, fortyEightHourDelta } = this.props
      return([
      <rect x='6' y='0' width='27' height='10' style={{strokeWidth:'.2', stroke:'orange', fill:'white'}}/>,
      <text x='7' y='2' style={{fill: 'black', fontSize:'1.5'}}> Last Observation: {lastReading.date.slice(0,16)} </text>,
      <text x='7' y='4' style={{fill: 'black', fontSize:'1.5'}}> Last Observed Value: {lastReading.level}  ft</text>,
      <TrendInfo 
        sixHourDelta = {sixHourDelta}
        twelveHourDelta = {twelveHourDelta}
        twentyFourHourDelta = {twentyFourHourDelta}
        fortyEightHourDelta = {fortyEightHourDelta}/>
    ])
	}
}