import React from 'react'
import { Query } from 'react-apollo'

import AllCustomers from '../components/AllCustomers/AllCustomers'
import CurrentCustomers from '../components/CurrentCustomers/CurrentCustomers'
import CustomerInfoForm from '../components/CustomerInfoForm/CustomerInfoForm'
import { Spinner } from '../components/Spinner'
import TivoliRiverLevel from '../components/TivoliRiverLevel/TivoliRiverLevel'
import ALL_METERS from '../graphql/AllMeters.graphql'
import SEARCH_CUSTOMERS from '../graphql/SearchCustomers.graphql'

export default class Main extends React.Component{
	constructor() {
		super()

		this.state = {
			query: '',
			customer: ''
		}

		this.dropDown = this.dropDown.bind(this)
		this.onChange = this.onChange.bind(this)
		this.onSelect = this.onSelect.bind(this)
	}

	dropDown(event) {
		if(this.state.customer == event.target.id){
			this.setState({customer: ''})
		} else {
			this.setState({customer: event.target.id})	
		}
	}

	onChange(event) {
		// client.query(SEARCH_CUSTOMERS).then(res => {
		// 	console.log('query res', res)})
		// .catch(err => {
		// 	console.log('query err', err)
		// })
		console.log('props', this.props)
		this.setState({query:event.target.value})
	}

	onSelect(event) {
		const {client} = this.props
		console.log(event.target.innerHTML)

		client.query({
			query: ALL_METERS
			}
		).then(res => {
			console.log('query res', res)
		}).catch(err => {
			console.log('query', err)
		})
	}

	render(props) {

		return(
			<div>
			<h1> Calhoun's Demo Dashboard </h1>
			<TivoliRiverLevel />
			<input
				tabIndex = '1'
				placeholder='Search ...'
				type='text'
				onChange={this.onChange}
				style={{display:'block'}}
			/>
			{ this.state.query != ''
				? <ul>
					{ this.state.query != ''
						? <Query query={SEARCH_CUSTOMERS}
							ssr={false}
							variables={{query: this.state.query}}>
							{({loading, data}) => {
									if (loading) {
										return (<li> <Spinner /> </li>)
									} else if (data == undefined || data.searchCustomer.length === 0) {
										return (<li> Add Customer </li>)
									} else {
										const options = data.searchCustomer.map((customer, i) => {
											return (<li tabIndex={i + 2} key={i + 2}> {customer.given_name}
												<i className='material-icons'
												style={{fontSize:'12px', color:'blue'}}
												id={customer._id}
												onClick={this.dropDown}>{this.state.customer == customer._id ? 'cancel' : 'more_vert'}</i>
												<menu style={this.state.customer == customer._id ? {} : {display:'none'}}>
													<li key='checkin' data-id={customer._id} onClick={this.onSelect}> Checkin </li>
													<li data-id={customer._id} onClick={this.onSelect}> CheckOut </li>
													<li data-id={customer._id} onClick={this.onSelect}> Transfer </li>
												</menu>
												</li>)
										})
										return options
									}
								}
							}
						  </Query>
						: null
						}
				  </ul>
				: <button> Add Customer </button>
			}
			<CustomerInfoForm />
	    <CurrentCustomers />
			<AllCustomers />
	      </div>
		)
	}
}