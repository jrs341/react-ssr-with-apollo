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
			<h1> This is Calhoun's </h1>
			<h1> Search Customers </h1>
	      	<input
		      	placeholder='Search ...'
		      	type='text'
		      	onChange={this.onChange}
	      	/>
	      	{ this.state.query == ''
	      		? <div style={{height:'30px', width:'80px'}}></div>
	      		: <Query query={SEARCH_CUSTOMERS}
	      		ssr={false}
	      		variables={{query: this.state.query}}>
	      	{ ({loading, data}) => {
	      		if (loading) {
	      			return (<h1> loading </h1>)
	      		} 
	      		else if (data == undefined || data.searchCustomer.length === 0){
	      			return null
	      		} else {
	      			return (
	      				<div>
	      				<h3> Results </h3>
	      				{data.searchCustomer.map(customer => {
	      					return (<p> {customer.given_name + ' : ' + customer.email} </p>)
	      				})}
	      				</div>
	      			)
	      		}
	      	}
	    	}
	    	</Query>
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
	                    return (<p> {customer.given_name + ' : ' + customer.email} </p>)
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