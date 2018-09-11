import React, { Component } from 'react'

export default class DateRangeField extends Component {
	constructor() {
		super()

		this.state = {
			checkin: '',
			checkout: ''
		}

		this.setDate = this.setDate.bind(this)
	}

// currently no need to change the date format if neeeded move to resolver
	setDate (event) {
		if (event.target.name == 'checkout' && event.target.value == '') {
			this.props.setParentState('checkout', 'unknown')
		} else {
			if (event.target.name == 'checkin' && this.props.rate != 'Daily' || this.props.rate != '') {
				console.log('checkin', event.target.value)
				const date = Date.parse(event.target.value)
				console.log('date',date)
				const checkoutDate = date.setMonth(date.getMonth + 1)
				// const checkoutDate = new Date(date + 24*60*60*1000*30).toISOString().substr(0,10)
				// let checkoutDate = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
				if (this.props.rate == 'Monthly'){
					// checkoutDate = checkoutDate + 24*60*60*1000*30
					console.log('checkout', checkoutDate)
					this.setState({checkout: checkoutDate})
				} else {
					// checkoutDate = checkoutDate + 24*60*60*1000*7
					this.setState({checkout: checkoutDate})
				}
			}
			this.props.setParentState(event.target.name, event.target.value)
		}
		
		// const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
		// const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
		// console.log('set date', event.target.value)
		// const date = new Date(event.target.value)
		// console.log('date', date)
		// console.log('day', date.getUTCDate())
		// console.log('month', date.getUTCMonth())
		// console.log('year', date.getUTCFullYear())
		// const month = months[date.getUTCMonth()]
		// const day = date.getUTCDate().toString()
		// const year = date.getUTCFullYear()
		// this.setState({[event.target.name]: month + '/' + day + '/' + year})
	}

	render() {
		return(
			<fieldset form='checkin' name='dateRange'>
			<legend> Date Range </legend>
				<label>Checkin</label>
				<input
				name='checkin'
				tabIndex = '4'
				type='date'
				onChange={this.setDate}
				required
				/>
				<label>Checkout</label>
				{ this.props.rate == 'Daily' || this.props.rate == ''
					? <input
						name='checkout'
						tabIndex = '4'
						type='date'
						onChange={this.setDate}
						required
					/>
					: <input
						name='checkout'
						tabIndex = '4'
						type = 'date'
						onChange={this.setDate}
						value = {this.state.checkout}
						required
					/>
				}
			</fieldset>
		)
	}
}