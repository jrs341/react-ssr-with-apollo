import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Canvas extends Component {
  static propTypes = {
   
  }

  static defaultProps = {
   
  }

  constructor (props) {
    super (props)

    this.state = {
      
    }

  }

  componentDidMount () {
    const canvas = this.refs.tivoliRiverLevel
    const context = canvas.getContext("2d")
    const width = canvas.width = 800
    const height = canvas.height = 400

    const stats = [40, 65, 72, 120, 250, 87, 100, 42]

    context.translate(0, height)
    context.scale(1,-1)

    context.fillStyle = '#f6f6f6'
    context.fillRect(0,0,width,height)

    let left = 0
    let prev_stat = stats[0]
    const move_left_by = 100

    for(stat in status){
      the_stat = stats[stat]

      context.beginPath()
      context.moveTo(left, prev_stat)
      context.lineTo(left+move_left_by, the_stat)
      context.lineWidth = 5
      context.lineCap = 'round'

      context.stroke()

      prev_stat = the_stat
      left += move_left_by
    }

  }

  render () {
    return (
      <canvas ref='tivoliRiverLevel' style={{border:'1px solid #000000'}}>
      </canvas>
    )
    
  }
}

