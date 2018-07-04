import React from 'react';

import Table from './table-partials/Table';

import { officePrices, vendingPrices } from '../../../data/prices';

class Prices extends React.Component {
	constructor (props) {
		super(props);
	}

	componentDidMount () {
		window.scrollTo(0,0);
	}

	render () {
		return (
			<div id="prices">

				<div className="section-banner"/>

				<div className="container">
					<h2> Малки и средни обекти</h2>
					<Table id='office-prices-table' data={officePrices}/>

					<h2> Големи обекти</h2>
					<Table id='vending-prices-table' data={vendingPrices}/>
				</div>
			</div>
		);
	}
}

export default Prices;