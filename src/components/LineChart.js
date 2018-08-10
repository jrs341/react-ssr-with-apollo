import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './LineChart.css'

export default class LineChart extends Component {
  static propTypes = {
   
  }

  static defaultProps = {
    data: [],  
    color: '#2196F3',  
    svgHeight: 42,  
    svgWidth: 77
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

  makeAxis(data) {
    return(
      <g>
      {this.makeMajorAxis()}
      {this.makeMinorXAxis()}
      {this.makeMinorYAxis(data)}
      </g>
    )
  }

  makeMajorAxis() {
    const { svgHeight, svgWidth } = this.props
    return (
      [
        <line key='majorX' x1='3' y1={svgHeight - 12} x2={svgWidth} y2={svgHeight - 12} style={{stroke:'black',strokeWidth:'.3'}}/>,
        <line key='majorY' x1='5' y1={svgHeight - 10} x2='5' y2='0' style={{stroke:'black',strokeWidth:'.3'}}/>
      ]
    )
  }

  makeMinorXAxis() {
    const { svgWidth } = this.props
    const minorXAxis = []
    for (var i = 0; i < 10; i++) {
      if (i === 1 || i === 2) {
        i === 1
          ?  minorXAxis.push([<line key={'minorX' + i} x1='3' y1='3.12' x2={svgWidth} y2='3.12' style={{stroke:'red', strokeWidth:'.2'}}/>,
              <text x='0' y='3.6' style={{fill: 'red', fontSize:'1.5'}}> 8.96 </text>])
          :  minorXAxis.push([<line key={'minorX' + i} x1='3' y1={i * 3} x2={svgWidth} y2={i * 3} style={{stroke:'orange', strokeWidth:'.1'}}/>,
              <text x='1' y={(i * 3) + .4} style={{fill: 'black', fontSize:'1.5'}}> {(i * 3) + 2} </text>])  
      } else {
          minorXAxis.push([<line key={'minorX' + i} x1='3' y1={i * 3} x2={svgWidth} y2={i * 3} style={{stroke:'black', strokeWidth:'.1'}}/>,
            <text x='1' y={(i * 3) + .4} style={{fill: 'black', fontSize:'1.5'}}> {(30 - (i * 3))/3} </text>])
      }
    }
    return minorXAxis
  }

  makeMinorYAxis(data) {
    const { svgHeight, svgWidth } = this.props
    const minorYAxis = []
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    // svgWidth/5
    for (var i = 1; i <= 14; i++) {
      const date = new Date()
        const month = months[date.getMonth()]
        Date.prototype.addDays = (days) => {
          return new Date(date.getTime() + days * 86400000)
        }
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
        const hour = date.getHours()
        const minutes = date.getMinutes() === 0
          ? '00'
          : '00'
      if (i % 2 === 0){
        minorYAxis.push([<line key={'minorY' + i} x1={i * 5 + 5} y1={svgHeight - 10} x2={i * 5 + 5} y2='0' style={{stroke:'grey',strokeWidth:'.1'}}/>,
        <text x={i * 5 + 4} y={svgHeight - 8} style={{fill: 'black', fontSize:'1.5'}}>{hour}:{minutes}</text>,
        <text x={i * 5 + 4} y={svgHeight - 6} style={{fill: 'black', fontSize:'1.5'}}>{day}</text>,
        <text x={i * 5 + 4} y={svgHeight - 4} style={{fill: 'black', fontSize:'1.5'}}>{month} {index}</text>])
      } else {
        minorYAxis.push([<line key={'minorY' + i} x1={i * 5 + 5} y1={svgHeight - 10} x2={i * 5 + 5} y2='0' style={{stroke:'grey',strokeDasharray:'1,.5',strokeWidth:'.1'}}/>,
        <text x={i * 5 + 3} y={svgHeight - 8} style={{fill: 'black', fontSize:'1.5'}}>{hour + 12}:{minutes}</text>,
        <text x={i * 5 + 3} y={svgHeight - 6} style={{fill: 'black', fontSize:'1.5'}}>{day}</text>,
        <text x={i * 5 + 3} y={svgHeight - 4} style={{fill: 'black', fontSize:'1.5'}}>{month} {index}</text>])
      }
    }
    return minorYAxis
  }

  render () {
    const {data, svgHeight, svgWidth} = this.props
    const firstFour = data.slice(0,4)
    let shiftData = []
    firstFour.map((obj, i) => {
      if (obj.date.indexOf(':00') < 16) {
        shiftData = [...data].splice(i)
      } else {
        return
      }
    })
    const lastValue = data[data.length -1]
    const sixHour = Number(data[data.length -1].level) - Number(data[data.length -25].level)
    const twelveHour = Number(data[data.length -1].level) - Number(data[data.length -49].level)
    const twentyFourHour = Number(data[data.length -1].level) - Number(data[data.length -97].level)
    const fortyEightHour = Number(data[data.length -1].level) - Number(data[data.length -193].level)
    const sixHourColor = sixHour < 0
      ? 'green'
      : sixHour === 0
        ? 'yellow'
        : 'red'
    const twelveHourColor = twelveHour < 0
      ? 'green'
      : twelveHour === 0
        ? 'yellow'
        : 'red'
    const twentyFourHourColor = twentyFourHour < 0
      ? 'green'
      : twentyFourHour === 0
        ? 'yellow'
        : 'red'
    const fortyEightHourColor = fortyEightHour < 0
      ? 'green'
      : fortyEightHour === 0
        ? 'yellow'
        : 'red'
    let sixY = ''
    const sixHourArrow = sixHour < 0
      ? sixY = '11.5,8 12.5,9 13.5,8'
      : sixHour === 0
        ? sixY = '0,0'
        : sixY = '11.5,8 12.5,7 13.5,8'
    let twelveY = ''
    const twelveHourArrow = twelveHour < 0
      ? twelveY = '16.5,8 17.5,9 18.5,8'
      : twelveHour === 0
        ? twelveY = '0,0'
        : twelveY = '16.5,8 17.5,7 18.5,8'
    let twentyFourY = ''
    const twentyFourHourArrow = twentyFourHour < 0
      ? twentyFourY = '22.5,8 23.5,9 24.5,8'
      : twentyFourHour === 0
        ? twentyFourY = '0,0'
        : twentyFourY = '22.5,8 23.5,7 24.5,8'
    let fortyEightY
    const fortyEightHourArrow = fortyEightHour < 0
      ? fortyEightY = '29.5,8 30.5,9 31.5,8'
      : fortyEightHour === 0
        ? fortyEightY = '0,0'
        : fortyEightY = '29.5,8 30.5,7 31.5,8'
    // ex data has 5 days of data at 4 data points per hour * 24 * 5 = 480
    // plus another 2 days prediction and 4 data points per hour * 24 * 2 = 192
    // added together = 672/svgWidth = 9.03 
    return (
      <svg viewBox={`-1 -1 ${svgWidth} ${svgHeight}`}>
        {shiftData.map((point, i) => {
          return <circle key={i} style={{stroke:'#2196F3', fill:'#2196F3'}} cx={i/9.03 + 5} cy={(10 - point.level) * 3} r='.05'/> 
        })}
        {this.makeAxis(shiftData)}
        <rect x='6' y='0' width='27' height='10' style={{strokeWidth:'.2', stroke:'orange', fill:'white'}}/>
        <text x='7' y='2' style={{fill: 'black', fontSize:'1.5'}}> Last Observation: {lastValue.date.slice(0,16)} </text>
        <text x='7' y='4' style={{fill: 'black', fontSize:'1.5'}}> Last Observed Value: {lastValue.level}  ft</text>
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
      </svg>
    )
    
  }
}