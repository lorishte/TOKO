import React from 'react';

class NotFound extends React.Component {

	componentDidMount () {
		window.scrollTo(0,0);
	}

	render () {
		return (
			<div className="container">
				<h1>Error 404. Not found.</h1>
				<p>This page doesn't exist.</p>
			</div>
		);
	}
}

export default NotFound;
