import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './LineChart.css'

export default class LineChart extends Component {
  static propTypes = {
   
  }

  static defaultProps = {
    data: [],  
    color: '#2196F3',  
    svgHeight: 60,  
    svgWidth: 100
  }

  constructor (props) {
    super (props)

    this.state = {
      
    }

    this.makeAxis = this.makeAxis.bind(this)
    this.makeMajorAxis = this.makeMajorAxis.bind(this)

  }

  makeAxis() {
    return(
      <g>
      {this.makeMajorAxis()}
      {this.makeMinorXAxis()}
      </g>
    )
  }

  makeMajorAxis() {
    return (
      <g>
        <line key='majorX' x1='3' y1='30' x2='100' y2='30' style={{stroke:'black',strokeWidth:'.3'}}/>
        <line key='majorY' x1='5' y1='32' x2='5' y2='0' style={{stroke:'black',strokeWidth:'.3'}}/>
      </g>
    )
  }

  makeMinorXAxis() {
    const { svgWidth } = this.props
    const minorXAxis = []
    for (var i = 1; i < 10; i++) {
      if (i === 1 || i === 2) {
        i === 1
          ?  minorXAxis.push(<line key={i} x1='3' y1='2.08' x2={svgWidth} y2='2.08' style={{stroke:'red', strokeWidth:'.2'}}/>)
          :  minorXAxis.push(<line key={i} x1='3' y1='6' x2={svgWidth} y2='6' style={{stroke:'orange', strokeWidth:'.1'}}/>)  
      } else {
          minorXAxis.push(<line key={i} x1='3' y1={i * 3} x2={svgWidth} y2={i * 3} style={{stroke:'black', strokeWidth:'.1'}}/>)
      }
    }
    return minorXAxis
  }

  makeMinorYAxis() {

  }

  render () {
    const {data, svgHeight, svgWidth} = this.props
    return (
      <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
        {data.map((point, i) => {
          return <circle key={i} style={{stroke:'#2196F3'}} cx={i/10 + 5} cy={(10 - point.level) * 3} r='.05'/> 
        })}
        {this.makeAxis()}
      </svg>
    )
    
  }
}