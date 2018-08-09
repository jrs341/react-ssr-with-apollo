import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './LineChart.css'

export default class LineChart extends Component {
  static propTypes = {
   
  }

  static defaultProps = {
    data: [],  
    color: '#2196F3',  
    svgHeight: 40,  
    svgWidth: 75
  }

  constructor (props) {
    super (props)

    this.state = {
      
    }

    this.makeAxis = this.makeAxis.bind(this)
    this.makeMajorAxis = this.makeMajorAxis.bind(this)
    this.makeMinorXAxis = this.makeMinorXAxis.bind(this)
    this.makeMinorYAxis = this.makeMinorYAxis.bind(this)

  }

  makeAxis() {
    return(
      <g>
      {this.makeMajorAxis()}
      {this.makeMinorXAxis()}
      {this.makeMinorYAxis()}
      </g>
    )
  }

  makeMajorAxis() {
    const { svgHeight, svgWidth } = this.props
    return (
      [
        <line key='majorX' x1='3' y1={svgHeight - 10} x2={svgWidth} y2={svgHeight - 10} style={{stroke:'black',strokeWidth:'.3'}}/>,
        <line key='majorY' x1='5' y1={svgHeight - 8} x2='5' y2='0' style={{stroke:'black',strokeWidth:'.3'}}/>
      ]
    )
  }

  makeMinorXAxis() {
    const { svgWidth } = this.props
    const minorXAxis = []
    for (var i = 1; i < 10; i++) {
      if (i === 1 || i === 2) {
        i === 1
          ?  minorXAxis.push(<line key={'minorX' + i} x1='3' y1='2.08' x2={svgWidth} y2='2.08' style={{stroke:'red', strokeWidth:'.2'}}/>)
          :  minorXAxis.push(<line key={'minorX' + i} x1='3' y1='6' x2={svgWidth} y2='6' style={{stroke:'orange', strokeWidth:'.1'}}/>)  
      } else {
          minorXAxis.push(<line key={'minorX' + i} x1='3' y1={i * 3} x2={svgWidth} y2={i * 3} style={{stroke:'black', strokeWidth:'.1'}}/>)
      }
    }
    return minorXAxis
  }

  makeMinorYAxis() {
    const { data, svgHeight, svgWidth } = this.props
    const minorYAxis = []
    for (var i = 1; i < svgWidth/5; i++) {
      if (i % 2 === 0) {
        minorYAxis.push(<line key={'minorY' + i} x1={i * 5 + 5} y1={svgHeight - 8} x2={i * 5 + 5} y2='0' style={{stroke:'black',strokeWidth:'.1'}}/>)
      } else {
        minorYAxis.push(<line key={'minorY' + i} x1={i * 5 + 5} y1={svgHeight - 8} x2={i * 5 + 5} y2='0' style={{stroke:'black',strokeDasharray:'1,.5',strokeWidth:'.1'}}/>)
      }
    }
    return minorYAxis
  }

  render () {
    const {data, svgHeight, svgWidth} = this.props
    // ex data has 5 days of data at 4 data points per hour * 24 * 5 = 480
    // plus another 2 days prediction and 4 data points per hour * 24 * 2 = 192
    // added together = 672/svgWidth = 9.03 
    return (
      <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
        {data.map((point, i) => {
          return <circle key={i} style={{stroke:'#2196F3'}} cx={i/9.03 + 5} cy={(10 - point.level) * 3} r='.05'/> 
        })}
        {this.makeAxis()}
      </svg>
    )
    
  }
}