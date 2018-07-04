import React from 'react';

class TokoCoffee extends React.Component {

	constructor (props) {
		super(props);

		this.banner = React.createRef();
		this.text = React.createRef();
	}

	componentDidMount () {
		window.addEventListener('scroll', this.handleScroll);
	};

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	};

	handleScroll = () => {
		let wScroll = window.scrollY;
		this.banner.current.style['background-position'] = '50% ' + ( (wScroll / 5) - 400) + 'px';

		if (wScroll > 500 && wScroll < 1600) {
			this.banner.current.style.opacity = 1;
		} else {
			this.banner.current.style.opacity = 0;
		}

		if (wScroll > 700 && wScroll < 1400) {
			this.text.current.style.opacity = 1;
		} else {
			this.text.current.style.opacity = 0;
		}
	};


	render () {
		return (
			<div id="our-coffee" className="container">
				<h2 className="section-headline">Добтото кафе. Защото всеки офис има нужда от него.</h2>

				<div id="our-coffee-banner" ref={this.banner}>
					<div className="section-info" ref={this.text}>
						<img src="/images/logo/TOKO_logo_BW.svg" className="logo"/>
						<h2 className="section-headline">Office Coffee Beans</h2>
						<p className="section-text">За да можем да задоволим индивидуалните предпочитания на всеки наш
							клиент ние предлагаме широка гама от кафе селекции. Всяка една от тях представлява уникален
							букет от вкус, аромат и интензитет и разкрива различна страна на истинското еспресо.</p>
						{/*<button className="btn primary md">Повече</button>*/}
					</div>
				</div>
			</div>
		);
	}
}

export default TokoCoffee;
