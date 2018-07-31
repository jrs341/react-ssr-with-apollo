import React from 'react'
import { Query } from 'react-apollo'

import ALL_CUSTOMERS from '../graphql/AllCustomers.graphql'
import SEARCH_CUSTOMERS from '../graphql/SearchCustomers.graphql'

export default class Main extends React.Component{
	constructor() {
		super()

		this.state = {
			query: ''
		}

		this.onChange = this.onChange.bind(this)
	}

	onChange(event) {
		this.setState({query:event.target.value})
	}

	render() {

		return(
			<div>
			<h1> Calhoun's Demo Dashboard </h1>
			<h1> Search Customers </h1>
			<input
				placeholder='Search ...'
				type='text'
				onChange={this.onChange}
				style={{display:'block'}}
			/>
			{ this.state.query != ''
				? <select>
					<option> Add Customer </option>
				{	this.state.query != ''
					? <Query query={SEARCH_CUSTOMERS}
						ssr={false}
						variables={{query: this.state.query}}>
						{ ({loading, data}) => {
							if (loading) {
								return (<option> loading </option>)
							} else if (data == undefined || data.searchCustomer.length === 0) {
								return <option> Add Customer </option>
							} else {
								const options = data.searchCustomer.map(customer => {
									return (<option key={customer.email}> {customer.given_name + ' : ' + customer.email} </option>)
								})
								return options
							}
						}
						}
					</Query>
					: null
				}
				</select>
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
	                    return (<p key={customer.email}> {customer.given_name + ' : ' + customer.email} </p>)
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