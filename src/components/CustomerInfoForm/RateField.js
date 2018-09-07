import React, { Component } from 'react'

export default class RateField extends Component {
	render() {
		return(
			<fieldset form='checkin' name='rateSet'>
				<label>Daily</label>
					<input
					tabIndex = '2'
					name = 'daily'
					type = 'checkbox'
					/>
					<label>Weekly</label>
					<input
					tabIndex = '3'
					name = 'weekly'
					type = 'checkbox'
					/>
					<label>Monthly</label>
					<input
					tabIndex = '4'
					name = 'monthly'
					type = 'checkbox'
				/>
			</fieldset>
		)
	}
}