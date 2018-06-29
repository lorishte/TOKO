import React from 'react';

import Slider from './slider/Slider';
import WhyUs from './whyUs/WhyUs';
import TokoCoffee from './tokoCoffee/TokoCoffee';
import Teasers from './teasers/Teasers';

class Home extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {

		return (
			<div id="home">
				<Slider/>
				<WhyUs/>
				<TokoCoffee/>
				<Teasers/>
			</div>
		);
	}
}

export default Home;