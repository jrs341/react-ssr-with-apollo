import React, { Component } from 'react'

export default class DateRangeField extends Component {
	render() {
		return(
			<fieldset form='checkin' name='dateRange'>
			<legend> Date Range </legend>
				<label>Checkin</label>
				<input
				tabIndex = '4'
				type='date'
				/>
				<label>Checkout</label>
				<input
				tabIndex = '4'
				type='date'
				/>
			</fieldset>
		)
	}
}