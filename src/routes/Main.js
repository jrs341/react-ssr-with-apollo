import React from 'react'
import { Query } from 'react-apollo'
import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'

import LineChart from '../components/LineChart/LineChart'
// import { Logo } from '../components/Logo'
import { Spinner } from '../components/Spinner'

import ALL_CUSTOMERS from '../graphql/AllCustomers.graphql'
import ALL_METERS from '../graphql/AllMeters.graphql'
import SEARCH_CUSTOMERS from '../graphql/SearchCustomers.graphql'
import TIVOLI_RIVER_INFO from '../graphql/TivoliRiverInfo.graphql'

export default class Main extends React.Component{
	constructor() {
		super()

		this.state = {
			query: '',
			customer: ''
		}

		this.onChange = this.onChange.bind(this)
		this.onSelect = this.onSelect.bind(this)
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
		console.log('key', event.currentTarget.dataset.id)
		const meters = ALL_METERS
		console.log('meters', meters)
		if(this.state.customer == event.target.id){
			this.setState({customer: ''})
		} else {
			this.setState({customer: event.target.id})	
		}
	}

	render(props) {

		return(
			<div>
			<h1> Calhoun's Demo Dashboard </h1>
			<Query query={TIVOLI_RIVER_INFO}
				ssr={true}>
				{({loading, data}) => {
					if (loading) {
						return (<Spinner />)
					} else if (data == undefined || data.getTivoliRiverInfo.length === 0) {
						return (<h3> No Data </h3>)
					} else {
						return (
							<LineChart data={data.getTivoliRiverInfo}>
							</LineChart>
						)
					}
				}}
				
			</Query>
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
												onClick={this.onSelect}>{this.state.customer == customer._id ? 'cancel' : 'more_vert'}</i>
												<menu style={this.state.customer == customer._id ? {} : {display:'none'}}>
													<li data-id={customer._id} onClick={this.onSelect}> Checkin </li>
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
	      	
			<Query query={ALL_CUSTOMERS}>
	        { ({loading, data}) => {
	            if (loading) {
	             return ( <h1> <Spinner /> </h1> )
	            } else {
	              return ( 
	                <div>
	                  <h1> All Customers </h1>
	                  {data.allCustomers.map(customer => {
	                    return (<p key={customer.email}> {customer.given_name + ' ' + customer.family_name + ' : ' + customer.email} </p>)
	                  })}
	                </div>
	              )
	            }
	          } 
	        }
	      </Query>
	      </div>
		)
	}
}