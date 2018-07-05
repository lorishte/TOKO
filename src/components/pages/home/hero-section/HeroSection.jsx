import React from 'react';

class HeroSection extends React.Component {

	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div id="hero-section" className="bg-white">
				<div className="container">

					<div id="hero-icons">

						<article className="article">
						<span className="icon-container">
							<img src="/images/icons/coffee.svg" className="icon"/>
						</span>
							<h3 className="article-headline">Истинско еспресо</h3>
						</article>

						<article className="article">
						<span className="icon-container">
							<img src="/images/icons/machine.svg" className="icon"/>
						</span>
							<h3 className="article-headline">Безплатна машина</h3>
						</article>

						<article className="article">
						<span className="icon-container">
							<img src="/images/icons/maintenance.svg" className="icon"/>
						</span>
							<h3 className="article-headline">Безплатна поддръжка на машината</h3>
						</article>

						<article className="article">
						<span className="icon-container">
							<img src="/images/icons/delivery.svg" className="icon"/>
						</span>
							<h3 className="article-headline">Безплатна доставка на кафе и необходимите консумативи</h3>
						</article>
					</div>
				</div>

			</div>
		);
	}
}

export default HeroSection;
