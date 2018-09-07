import React, { Component } from 'react'

import DateRangeField from '../CustomerInfoForm/DateRangeField'
import RateField from '../CustomerInfoForm/RateField'

export default class CheckAvailability extends Component {
	constructor() {
		super()

		this.state = {
			cabin: true,
			rv: true,
			monthly: false,
			moreThanTen: false
		}

		this.choice = this.choice.bind(this)
	}

	choice(event) {
		if(event.target.name == 'rv') {
			this.setState({cabin: !this.state.cabin})
		} else {
			this.setState({rv: !this.state.rv})
		}	
	}

	render() {
		return (
			[<h3> Check Availability </h3>,
			<label> Cabin </label>,
			<div>{this.state.cabin 
				? <input
					type='checkbox'
					name='cabin'
					onClick={this.choice}
					/>
				: <input
					type='checkbox'
					name='cabin'
					disabled
					/>}</div>,
			<label> RV Space </label>,
			<div>{this.state.rv
				? <input
					type='checkbox'
					name='rv'
					onClick={this.choice}
					/>
				: <input
					type='checkbox'
					name='rv'
					disabled
					/>}</div>,
			<RateField />,
			<DateRangeField />]
		)
	}
} 