import React from 'react';

class WhyUs extends React.Component {

	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div id="why-us" className="container bg-white">

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

				<div className="section-info">
					<h2 className="section-headline">Hашето най-добро предложение</h2>
					<p className="section-text">В приготвянето на едно истинско еспресо се съчетават три ключови елемента – първокласно кафе, качествена машина и прецизна настройка. Именно те стоят и в основата на това наше предложение. То представлява комбинация между нашите специално селектирани кафета и автоматична еспресо машина, предоставена и поддържана БЕЗПЛАТНО от нас*. Благодарение на нея ще можете всеки ден, на работното си място, да приготвяте бързо и удобно наистина качествено еспресо.</p>
				</div>

			</div>
		);
	}
}

export default WhyUs;
