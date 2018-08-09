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
        <line x1='0' y1='20' x2='100' y2='20' style={{stroke:'#2196F3',strokeWidth:'.5'}}/>
        <line x1='0' y1='20' x2='0' y2='0' style={{stroke:'#2196F3',strokeWidth:'.7'}}/>
        <line x1='-3' y1='2.08' x2='100' y2='2.08' style={{stroke:'red', strokeWidth:'.2'}}/>
        <line x1='-3' y1='4' x4='100' y2='4' style={{stroke:'yellow', strokeWidth:'.1'}}/>
        <line x1='-5' y1='6' x2='100' y2='6' style={{stroke:'#2196F3', strokeWidth:'.1'}}/>
        <line x1='-5' y1='8' x2='100' y2='8' style={{stroke:'#2196F3', strokeWidth:'.1'}}/>
        <line x1='-5' y1='10' x2='100' y2='10' style={{stroke:'#2196F3', strokeWidth:'.1'}}/>
        <line x1='-5' y1='12' x2='100' y2='12' style={{stroke:'#2196F3', strokeWidth:'.1'}}/>
        <line x1='-5' y1='14' x2='100' y2='14' style={{stroke:'#2196F3', strokeWidth:'.1'}}/>
        <line x1='-5' y1='16' x2='100' y2='16' style={{stroke:'#2196F3', strokeWidth:'.1'}}/>
        <line x1='-5' y1='18' x2='100' y2='18' style={{stroke:'#2196F3', strokeWidth:'.1'}}/>
      </g>
    )
  }

  render () {
    const {data, svgHeight, svgWidth} = this.props
    return (
      <svg viewBox='0 0 100 35'>
        {data.map((point, i) => {
          return <circle cx={i/10} cy={(10 - point.level) * 2} r='.2'/> 
        })}
        {this.makeAxis()}
      </svg>
    )
    
  }
}