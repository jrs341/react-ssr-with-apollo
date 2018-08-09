import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './LineChart.css'

export default class LineChart extends Component {
  static propTypes = {
   
  }

  static defaultProps = {
    data: [],  
    color: '#2196F3',  
    svgHeight: 35,  
    svgWidth: 100
  }

  constructor (props) {
    super (props)

    this.state = {
      
    }

  }

  makeAxis() {
    return (
      <g style={{stroke: '#bdc3c7'}}>
        <line x1='0' y1='10' x2='100' y2='10' style={{stroke:'#2196F3',strokeWidth:'.5'}}/>
        <line x1='0' y1='10' x2='0' y2='0' style={{stroke:'#2196F3',strokeWidth:'.7'}}/>
      </g>
    )
  }

  render () {
    const {data, svgHeight, svgWidth} = this.props
    return (
      <svg viewBox='0 0 100 35'>
        {data.map((point, i) => {
          return <circle cx={i} cy={point.level} r='.2'/> 
        })}
        {this.makeAxis()}
      </svg>
    )
    
  }
}