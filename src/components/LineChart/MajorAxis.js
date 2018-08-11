import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class MajorAxis extends Component {
	static propTypes = {

	}

	static defaultProps = {
		svgHeight: 40,
		svgWidth: 80
	}

	constructor (props) {
		super (props)

		this.state = {

		}
	}

	render() {
		const { svgHeight, svgWidth} = this.props
		return (
      [
        <line key='majorX' x1='3' y1={svgHeight - 10} x2={svgWidth - 5} y2={svgHeight - 10} style={{stroke:'black',strokeWidth:'.3'}}/>,
        <line key='majorY' x1='5' y1={svgHeight - 8} x2='5' y2='0' style={{stroke:'black',strokeWidth:'.3'}}/>
      ]
    )
	}
}