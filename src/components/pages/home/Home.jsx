import React from 'react';

import Slider from './slider/Slider';
import HeroSection from './hero-section/HeroSection';
import Teasers from './teasers/Teasers';
import WhyUs from './whyUs/WhyUs';

class Home extends React.Component {
	constructor (props) {
		super(props);
	}

	componentDidMount () {
		window.scrollTo(0, 0);
	}

	render () {
		return (
			<div id="home">
				<Slider/>
				<HeroSection/>
				<Teasers/>
				<WhyUs/>
			</div>
		);
	}
}

export default Home;