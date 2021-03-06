import React from 'react'
import { withApollo } from 'react-apollo'

import AllCustomers from '../components/AllCustomers/AllCustomers'
import Availability from '../components/Availability/Availability'
import CheckAvailability from '../components/CheckAvailability/CheckAvailability'
import CurrentCustomers from '../components/CurrentCustomers/CurrentCustomers'
import CustomerInfoForm from '../components/CustomerInfoForm/CustomerInfoForm'
import TivoliRiverLevel from '../components/TivoliRiverLevel/TivoliRiverLevel'

class Main extends React.Component{
	render(props) {
		return(
			<div>
			<h1> Calhoun's Demo Dashboard </h1>
			{/*<TivoliRiverLevel />*/}
			<CheckAvailability />
			{/*<Availability />*/}
			<CustomerInfoForm />
	    <CurrentCustomers />
			{/*<AllCustomers />*/}
	    </div>
		)
	}
}

export default withApollo(Main)