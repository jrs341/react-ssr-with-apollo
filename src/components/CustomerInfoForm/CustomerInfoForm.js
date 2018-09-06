import React from 'react'
import { withApollo } from 'react-apollo'

import Search from '../Search/Search'

class CustomerInfoForm extends React.Component{
	constructor() {
		super()

		this.state = {
			query: '',
			customer: {}
		}

		this.onChange = this.onChange.bind(this)
		this.setCustomer = this.setCustomer.bind(this)
		this.updateCustomer = this.updateCustomer.bind(this)
	}

	onChange(event) {
		this.setState({query:event.target.value})
	}

	setCustomer(customer) {
		this.setState({customer:customer})
		console.log(this.state.customer)
	}

	updateCustomer(event) {
		this.setState({customer: { ...this.state.customer, [event.target.name] : event.target.value}})
	}

	render(props) {
		return (
			<form name = 'checkin'>
				<Search setCustomer={this.setCustomer}/>
				<label>First Name</label>
				<input
				tabIndex = '2'
				name = 'given_name'
				type = 'text'
				onChange = {this.updateCustomer}
				value = {this.state.customer.given_name}
				/>
				<label>Last Name</label>
				<input
				tabIndex = '3'
				name='family_name'
				type='text'
				value={this.state.customer.family_name}
				/>
				<label>Email</label>
				<input
				tabIndex = '4'
				name='email'
				type='email'
				value={this.state.customer.email}
				/>
				<label>Phone</label>
				<input
				tabIndex = '5'
				name='phone_number'
				type='phone'
				value={this.state.customer.phone_number}
				/>
				<label>Alt Phone</label>
				<input
				tabIndex = '6'
				name='phone_number_alt'
				type='phone'
				value={this.state.customer.phone_number_alt}
				/>
				<label>Address</label>
				<input
				tabIndex = '7'
				name='address_line_1'
				type='text'
				value={this.state.customer.address_line_1}
				/>
				<label>City</label>
				<input
				tabIndex = '8'
				name='locality'
				type='text'
				value={this.state.customer.locality}
				/>
				<label>State</label>
				<input
				tabIndex = '9'
				name='administrative_district_level_1'
				type='text'
				value={this.state.customer.administrative_district_level_1}
				/>
				<label>Postal Code</label>
				<input
				tabIndex = '10'
				name='postal_code'
				type='text'
				value={this.state.customer.postal_code}
				/>
				<label>Country</label>
				<input
				tabIndex = '11'
				name='country'
				type='text'
				value={this.state.customer.country}
				/>
				<label>Drivers License Num</label>
				<input
				tabIndex = '12'
				name='drivers_license_num'
				type='text'
				value={this.state.customer.drivers_license_num}
				/>
				<label>Drivers License State</label>
				<input
				tabIndex = '12'
				name='drivers_license_state'
				type='text'
				value={this.state.customer.drivers_license_state}
				/>
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
				<input
				type='submit'
				/>
				<input
				type='reset'
				/>
			</form>
		)
	}
}

export default withApollo(CustomerInfoForm)