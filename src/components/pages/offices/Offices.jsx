import React from 'react';

class Offices extends React.Component {
	constructor (props) {
		super(props);
	}

	componentDidMount () {
		window.scrollTo(0,0);
	}

	render () {

		return (
			<div id="offices">

				<div className="section-banner"/>
				<div className="container">
					<h1>Решения за офиси</h1>
				</div>
			</div>
		);
	}
}

export default Offices;