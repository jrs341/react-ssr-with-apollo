import React from 'react'
import { Query } from 'react-apollo'
import LineChart from '../LineChart/LineChart'
import { Spinner } from '../Spinner'

import TIVOLI_RIVER_INFO from '../../graphql/TivoliRiverInfo.graphql'

export default class TivoliRiverLevel extends React.Component{
	render() {
		return(
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
		)
	}
}
