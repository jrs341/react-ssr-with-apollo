import React, {Component} from 'react'
import PropTypes from 'prop-types'
import DataBox from './DataBox'
import MajorAxis from './MajorAxis'
import MinorAxis from './MinorAxis'

export default class LineChart extends Component{
	static propTypes = {

	}

	static defaultProps = {
		// data: [],
		color: '#2196F3',
		svgHeight: 40,
		svgWidth: 80
	}

	constructor (props) {
		super (props)

		this.state = {

		}
	}

	render () {
		const { data:{data}, data:{trendInfo}, svgWidth, svgHeight } = this.props
		// console.log('**line props**', trendInfo)
		return(
			<svg viewBox={`-1 -1 ${svgWidth} ${svgHeight}`}>
				<g>
				{data.map((point, i) => {
          return <circle key={i} style={{stroke:'#2196F3', fill:'#2196F3'}} cx={i/9.6 + 5} cy={(10 - point.level) * 3} r='.05'/> 
        })}
				<MajorAxis />
				<MinorAxis />
				<DataBox
					lastReading = {trendInfo.lastReading}
					sixHourDelta = {trendInfo.sixHourDelta}
					twelveHourDelta = {trendInfo.twelveHourDelta}
					twentyFourHourDelta = {trendInfo.twentyFourHourDelta}
					fortyEightHourDelta = {trendInfo.fortyEightHourDelta}/>
				</g>
      </svg>
		)
	}
}