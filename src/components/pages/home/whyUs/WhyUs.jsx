import React from 'react';

class WhyUs extends React.Component {

	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div id="why-us">


				<div id="why-us-icons" className="container bg-white">

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

				<div className="section-info container bg-white">
					<h2 className="section-headline">TOKO. Защото сме професионалисти.</h2>
					<p className="section-text">Ние сме специализирани в дистрибуцията на
						кафе на работното място.
						В резултат на това ние можем да предложим на партньорите си
						разнообразни варианти на сътрудничество, подходящи
						за всяка работна среда..</p>
				</div>

			</div>
		);
	}
}

export default WhyUs;
