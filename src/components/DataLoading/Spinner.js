import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Spinner extends Component {
  render () {
    return (
      <div className='ura-spinner-container'>
        <div className='ura-spinner'>
          <div className='ura-rect1'></div>
          <div className='ura-rect2'></div>
          <div className='ura-rect3'></div>
          <div className='ura-rect4'></div>
          <div className='ura-rect5'></div>
        </div>
      </div>
    )
  }
}