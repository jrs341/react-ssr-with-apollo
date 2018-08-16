import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class MinorAxis extends Component {
	static propTypes = {

	}

	static defaultProps = {
    svgHeight: 40,
    svgWidth: 80,
    textStyle: {fill: 'black', fontSize:'1.5'}
	}

	constructor (props) {
		super (props)

		this.state = {

		}

		this.makeMinorXAxis = this.makeMinorXAxis.bind(this)
		this.makeMinorYAxis = this.makeMinorYAxis.bind(this)
	}

	makeMinorXAxis() {
    const { svgWidth, textStyle } = this.props
    const minorXAxis = []
    for (var i = 0; i < 10; i++) {
      if (i === 1 || i === 2) {
        i === 1
          ?  minorXAxis.push([<line key={'minorX' + i} x1='3' y1='3.12' x2={svgWidth - 5} y2='3.12' style={{stroke:'red', strokeWidth:'.2'}}/>,
              <text key={'minorXText' + i} x='0' y='3.6' style={{fill: 'red', fontSize:'1.5'}}> 8.96 </text>])
          :  minorXAxis.push([<line key={'minorX' + i} x1='3' y1={i * 3} x2={svgWidth -5 } y2={i * 3} style={{stroke:'orange', strokeWidth:'.1'}}/>,
              <text key={'minorXText' + i}x='1' y={(i * 3) + .4} style={textStyle}> {(i * 3) + 2} </text>])  
      } else {
          minorXAxis.push([<line key={'minorX' + i} x1='3' y1={i * 3} x2={svgWidth - 5} y2={i * 3} style={{stroke:'black', strokeWidth:'.1'}}/>,
            <text key={'minorXText' + i} x='1' y={(i * 3) + .4} style={textStyle}> {(30 - (i * 3))/3} </text>])
      }
    }
    return minorXAxis
  }

  makeMinorYAxis(data) {
    const { svgHeight, svgWidth, textStyle } = this.props
    const minorYAxis = []
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const date = new Date()
    const hour = date.getHours()
    const hour2 = new Date(date.setHours(date.getHours() + 12)).getHours()
    const minutes = date.getMinutes() === 0
      ? '00'
      : '00'

    Date.prototype.addDays = (days) => {
      return new Date(date.getTime() + days * 86400000)
    }

    for (var i = 1; i <= 14; i++) {
      
        const month = months[date.getMonth()]
        
        let day = ''
        if (i === 10 || (i - 10) % 2 === 0) {
          day = days[new Date().addDays((i - 10)/2).getDay()]
        } else {
          day = days[new Date().addDays((i - 11)/2).getDay()]
        }
        let index = ''
        if (i === 10 || (i - 10) % 2 === 0) {
          index = new Date().addDays((i - 10)/2).getDate()
        } else {
          index = new Date().addDays((i - 11)/2).getDate()
        }
        
      if (i % 2 === 0){
        minorYAxis.push([<line key={'minorY' + i} x1={i * 5 + 5} y1={svgHeight - 8} x2={i * 5 + 5} y2='0' style={{stroke:'grey',strokeWidth:'.1'}}/>,
        <text key={'minorYText' + i} x={i * 5 + 3.1} y={svgHeight - 6} style={textStyle}>{hour < 12 ? '0' + hour : hour}:{minutes}</text>,
        <text key={'minorYText' + i + 1} x={i * 5 + 3.5} y={svgHeight - 4} style={textStyle}>{day}</text>,
        <text key={'minorYText' + i + 2} x={i * 5 + 3.1} y={svgHeight - 2} style={textStyle}>{month} {index}</text>])
      } else {
        minorYAxis.push([<line key={'minorY' + i} x1={i * 5 + 5} y1={svgHeight - 8} x2={i * 5 + 5} y2='0' style={{stroke:'grey',strokeDasharray:'1,.5',strokeWidth:'.1'}}/>,
        <text key={'minorYText' + i} x={i * 5 + 3.2} y={svgHeight - 6} style={textStyle}>{hour2 < 12 ? '0' + hour2 : hour2}:{minutes}</text>,
        <text key={'minorYText' + i + 1} x={i * 5 + 3.5} y={svgHeight - 4} style={textStyle}>{day}</text>,
        <text key={'minorYText' + i + 2} x={i * 5 + 3.3} y={svgHeight - 2} style={textStyle}>{month} {index}</text>])
      }
    }
    return minorYAxis
  }

  render () {
  	return (
      <g key = 'minor axis'>
      {this.makeMinorYAxis()}
      {this.makeMinorXAxis()}
      </g>
  	)
  }
}