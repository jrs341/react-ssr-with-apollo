import React from 'react'
import { Query } from 'react-apollo'

import ALL_MOVIES from '../graphql/AllMovies.graphql'

export default class Main extends React.Component{
	constructor() {
		super()
	}

	render() {
		return(
			<div>
			<h1> This is Calhoun's </h1>
			<Query query={ALL_MOVIES}>
	        { ({loading, data}) => {
	            if (loading) {
	             return ( <h1> Loading </h1> )
	            } else {
	              return ( 
	                <div>
	                  <h1> all movies </h1>
	                  {data.allMovies.map(title => {
	                    return (<p> {title.title} </p>)
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