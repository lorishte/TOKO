import React from 'react';

class TokoCoffee extends React.Component {

	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div id="our-coffee">
				<div className="section-info">
					<img src="/images/logo/TOKO_logo_BW.svg" className="logo"/>
					<h2 className="section-headline">Office Coffee Beans</h2>
					<p className="section-text">За да можем да задоволим индивидуалните предпочитания на всеки наш клиент ние предлагаме широка гама от кафе селекции. Всяка една от тях представлява уникален букет от вкус, аромат и интензитет и разкрива различна страна на истинското еспресо.</p>
					<button className="btn primary md">Повече</button>
				</div>
			</div>
		);
	}
}

export default TokoCoffee;
