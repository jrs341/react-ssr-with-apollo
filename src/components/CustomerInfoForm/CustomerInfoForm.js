import React, { Component } from 'react'
import { withApollo } from 'react-apollo'

import RateField from './RateField'
import Search from '../Search/Search'

class CustomerInfoForm extends Component{
	constructor() {
		super()

		this.state = {
			cabin: false,
			customer: {},
			updatedInfo: {
				_id:''
			}
		}

		this.resetForm = this.resetForm.bind(this)
		this.setCustomer = this.setCustomer.bind(this)
		this.updateCustomer = this.updateCustomer.bind(this)
	}

	resetForm(event) {
		this.setState({customer:{}})
		this.setState({updatedInfo:{_id:''}})
	}

	setCustomer(customer) {
		this.setState({customer:customer})
		this.setState({updatedInfo:{_id:customer._id}})
	}

	updateCustomer(event) {
		if(Object.keys(this.state.customer).length === 0){
			const customer = {}
			const input = document.getElementById(event.target.name)
			this.setState({customer: customer})
			}
		this.setState({customer: { ...this.state.customer, [event.target.name] : event.target.value}})
	}

	render(props) {
		return (
			<div>
			<Search
				setCustomer={this.setCustomer}
				resetForm={this.resetForm}/>
			<form name = 'checkin'>
				<RateField />
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
				id = 'family_name'
				tabIndex = '3'
				name='family_name'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.family_name}
				/>
				<label>Email</label>
				<input
				id = 'email'
				tabIndex = '4'
				name='email'
				type='email'
				onChange = {this.updateCustomer}
				value={this.state.customer.email}
				/>
				<label>Phone</label>
				<input
				tabIndex = '5'
				name='phone_number'
				type='tel'
				value={this.state.customer.phone_number}
				/>
				<label>Alt Phone</label>
				<input
				tabIndex = '6'
				name='phone_number_alt'
				type='tel'
				onChange = {this.updateCustomer}
				value={this.state.customer.phone_number_alt}
				/>
				<label>Address</label>
				<input
				tabIndex = '7'
				name='address_line_1'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.address_line_1}
				/>
				<label>City</label>
				<input
				tabIndex = '8'
				name='locality'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.locality}
				/>
				<label>State</label>
				<input
				tabIndex = '9'
				name='administrative_district_level_1'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.administrative_district_level_1}
				/>
				<label>Postal Code</label>
				<input
				tabIndex = '10'
				name='postal_code'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.postal_code}
				/>
				<label>Country</label>
				<input
				tabIndex = '11'
				name='country'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.country}
				/>
				<label>Drivers License Num</label>
				<input
				tabIndex = '12'
				name='drivers_license_num'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.drivers_license_num}
				/>
				<label>Drivers License State</label>
				<input
				tabIndex = '13'
				name='drivers_license_state'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.drivers_license_state}
				/>
				<label>Additional Occupant</label>
				<input
				tabIndex = '14'
				name='additional_occupant_1'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.additional_occupant_1}
				/>
				<label>Additional Occupant Age</label>
				<input
				tabIndex = '15'
				name='additional_occupant_1_age'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.additional_occupant_1_age}
				/>
				<label>Number of Pets</label>
				<input
				tabIndex = '16'
				name='pets_number_of'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.pets_number_of}
				/>
				<label>Type of Pets</label>
				<input
				tabIndex = '17'
				name='pets_type'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.pets_type}
				/>
				<label>Breed of Dog</label>
				<input
				tabIndex = '18'
				name='pets_breed'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.pets_breed}
				/>
				<label>RV Type</label>
				<input
				tabIndex = '19'
				name='unit_type'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.unit_type}
				/>
				<label>RV Length</label>
				<input
				tabIndex = '20'
				name='unit_length'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.unit_length}
				/>
				<label>RV Year</label>
				<input
				tabIndex = '21'
				name='unit_year'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.unit_type}
				/>
				<label>RV License Plate Num</label>
				<input
				tabIndex = '22'
				name='unit_license'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.unit_license}
				/>
				<label>RV License Plate State</label>
				<input
				tabIndex = '23'
				name='unit_state'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.unit_state}
				/>
				<label>Vehicle Type</label>
				<input
				tabIndex = '24'
				name='vehicle_1_type'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.vehicle_1_type}
				/>
				<label>Vehicle License Num</label>
				<input
				tabIndex = '25'
				name='vehicle_1_license'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.vehicle_1_license}
				/>
				<label>Vehicle License State</label>
				<input
				tabIndex = '25'
				name='vehicle_1_state'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.vehicle_1_state}
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
				onClick={this.resetForm}
				/>
				<input
				type='submit'
				value='Call List'
				/>
			</form>
			</div>
		)
	}
}

export default withApollo(CustomerInfoForm)