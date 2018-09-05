import React from 'react'

export default class CustomerInfoForm extends React.Component{
	constructor() {
		super()

		this.state = {

		}
	}

	render() {
		return (
			<form name = 'checkin'>
				<label>First Name</label>
				<input
				tabIndex = '2'
				placeholder='Search ...'
				type='text'
				/>
				<label>Last Name</label>
				<input
				tabIndex = '3'
				placeholder='Search ...'
				type='text'
				/>
				<label>Email</label>
				<input
				tabIndex = '4'
				placeholder='Search ...'
				type='email'
				/>
				<label>Date</label>
				<input
				tabIndex = '4'
				placeholder='Search ...'
				type='date'
				/>
			</form>
		)
	}
}