import React from 'react';

class Vending extends React.Component {
	constructor (props) {
		super(props);
	}

	componentDidMount () {
		window.scrollTo(0,0);
	}

	render () {

		return (
			<div id="vending">
				<div className="section-banner"/>
				<div className="container">
					<h1>Решения за големи обекти</h1>
				</div>
			</div>
		);
	}
}

export default Vending;