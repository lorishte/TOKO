import React from 'react';

class Error extends React.Component {

	componentDidMount () {
		window.scrollTo(0,0);
	}

	render () {
		return (
			<div className="container">
				<h1>Error 500. Something went wrong.</h1>
				<p>Please try again later.</p>
			</div>
		);
	}
}

export default Error;
