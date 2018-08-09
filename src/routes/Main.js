import React from 'react'
import { Query } from 'react-apollo'

import Canvas from '../components/Canvas'
import LineChart from '../components/LineChart'

import ALL_CUSTOMERS from '../graphql/AllCustomers.graphql'
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
		// this.renderData = this.renderData.bind(this)
	}

	onChange(event) {
		this.setState({query:event.target.value})
	}

	onSelect(event) {
		this.setState({customer: event.target.value})
		console.log('customer', event.target.innerText)
	}

	renderData() {
		console.log('renderData')
	}

	render() {

		return(
			<div>
			<h1> Calhoun's Demo Dashboard </h1>
			<h1> Search Customers </h1>
			<Query query={TIVOLI_RIVER_INFO}
				ssr={true}>
				{({loading, data}) => {
					if (loading) {
						return (<h3> Loading </h3>)
					} else if (data == undefined || data.getTivoliRiverInfo.length === 0) {
						return (<h3> No Data </h3>)
					} else {
						return (<LineChart data={data.getTivoliRiverInfo}>
						</LineChart>)
					}
				}}
				
			</Query>
			{/*<Canvas>
			</Canvas>
			{this.renderData()}*/}
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
										return (<li> loading </li>)
									} else if (data == undefined || data.searchCustomer.length === 0) {
										return (<li> Add Customer </li>)
									} else {
										const options = data.searchCustomer.map((customer, i) => {
											return (<li tabIndex={i + 2}> <span key={'span' + i}
												onClick={this.onSelect}>{customer.given_name}</span> </li>)
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
			
	      	
			<Query query={ALL_CUSTOMERS}>
	        { ({loading, data}) => {
	            if (loading) {
	             return ( <h1> Loading </h1> )
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