import React, { Component } from 'react';

import './main.css';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Routes from './components/routes/Routes';

class App extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (

			<div>
				<Header/>

				<main>
					<Routes />
				</main>

				<Footer/>
			</div>

		);
	}
}

export default App;