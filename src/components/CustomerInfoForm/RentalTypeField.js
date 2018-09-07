import React, { Component } from 'react'

export default class RentalTypeField extends Component {
	render() {
		return(
			<fieldset form='checkin' name='rateSet'>
			<legend> Rental Type </legend>
				<label>RV Space</label>
					<input
					tabIndex = '2'
					name = 'rvSpace'
					type = 'checkbox'
					/>
					<label>Cabin</label>
					<input
					tabIndex = '3'
					name = 'cabin'
					type = 'checkbox'
					/>
			</fieldset>
		)
	}
}