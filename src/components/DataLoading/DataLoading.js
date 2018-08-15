import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {Spinner} from '../../Spinner'

class DataLoading extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    showLoading: PropTypes.bool,
    errorMessage: PropTypes.string,
    onReloadClick: PropTypes.func,
    onNotifyClick: PropTypes.func,
    allowReload: PropTypes.bool
  }
  state = {
    minH: 0
  }
  componentDidMount () {
    const { minH } = this.state
    const containerWidth = this.refs.dataLoadingContainer
      .getBoundingClientRect().width.toFixed(2)
    const minHeight = Math.floor(containerWidth * 0.33)
    if (minH !== minHeight) {
      this.setState({
        minH: minHeight
      })
    }
  }
  render () {
    const { minH } = this.state
    const {
      allowReload,
      isLoading,
      errorMessage,
      onReloadClick
    } = this.props

    return (
      <div className='ura-data-loading' ref='dataLoadingContainer'
        style={{
          minHeight: minH,
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          flexFlow: 'column',
        }}>
        { isLoading
          && <Spinner />
        }
        { errorMessage
          && <div style={{
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'center'
          }}>
            <div className={'ura-data-loading__error-message'}
              style={{
                padding: '10px',
                color:'#ccc'
              }}>
              {errorMessage}
            </div>
            { allowReload === true
             && <div className={'ura-data-loading__retry-actions'} >
               <button
                 className={'ura-button button__primary'}
                 onClick={() => { onReloadClick()}}
               >
                retry
               </button>
             </div>
            }
          </div>
        }
      </div>
    )
  }
}

export { DataLoading }
export default DataLoading
