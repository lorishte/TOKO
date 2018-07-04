import React from 'react';
Teasers;
class Teasers extends React.Component {

	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div id="teasers" className="container">

				<h2 className="section-headline">Гъвкави схеми. Защото бизнесът е различен.</h2>

				<article id="promo-teaser" className="article">
					<div className="image-container">
						{/*<img src="https://7ypwbg.db.files.1drv.com/y4mhwDdsv8WmLAKcczNxVy-C6WYD93PWUiyUtNMGZMKDoU-pZxOAPYOuXL8S9cB1Na227ED8zoBIXepBxqEKD0-YYQ6Y3yqzUUsLfWTLq1zfx01esjSnv1nfwaFdeHloP5Gp2ur1DvnSUABZr7iKkJD2udOy6nKG-_AWZFv1CPbqKLZ79n1BBHfZY5xbSi5eFbyiA2RwabcTkGVIYiw2gO_Zg?width=2000&height=1979&cropmode=none"/>*/}
						<img src="https://edqvww.db.files.1drv.com/y4mlRz2RqmBy5vw2CxQe5yA2dUjLwsVhLAB44Ihc207Jzm6ZS2-B8IO_r7MuDK7j0_n-0NKvEuTusOU2ovrl7aRfQsIKAfzPgYcNUgjreUxVU-ykbnr79IbMiYuYq8JTneSRk5Lnu4aw5R9hr172iCROg2BLYx75KMqbsnwBzSAwp5HtmvVMisxHKsjkzhad7kNxrYmf4Afr8LB_rb9XWyFBA?width=2000&height=1979&cropmode=none"/>
					</div>
					<h3 className="article-headline">-50%</h3>
					<div className="article-info">
						<h4>-50%</h4>
						<p className="article-text">
							Възползвайте се от нашето специално предложение:<br/>
							Пробвайте 1 месец нашето кафе с безплатна машина на 1/2 цена.
						</p>
					</div>
				</article>


				<article id="office-teaser" className="article">
					<div className="image-container">
						<img
							src="https://ipqpqa.db.files.1drv.com/y4mMfdJL_YQGDQIyNR1Uwulr7qZeEPnRRS7kyCLKr4_rKS1G0F_Aq3EugTcbfItfwsRaMsQ4pkioZBq7dB0RKXbpYzi5mVRI88c4BQzPkM-IZoMiskSTAsq1Oq_W-jbx-3YwKmOvIdufHSkrkG0xr772JRlVT-OBHhGD_XdR3Cyx38mW8-BWhgI0grSNRjA6MiNyxQwkrSAZojDa0r3secyzA?width=693&height=461&cropmode=none"/>
					</div>
					<div className="article-info">
						<h3 className="article-headline">Решения за офиси</h3>
						<h4>Нашето най-добро предложение</h4>

						<ul className="article-text">
							<li className="bullets">Истинско кафе</li>
							<li className="bullets">Безплатна машина</li>
							<li className="bullets">Безплатна поддръжка на машината</li>
							<li className="bullets">Безплатна доставка на кафе и необходимите консумативи</li>
						</ul>
					</div>
				</article>

				<article id="vending-teaser" className="article">
					<div className="image-container">
						<img
							src="https://fbfztg.db.files.1drv.com/y4mXzHHhfKIwgKQO-5QHeTErWSsebupJByA0AbStOnE8Xj5-dn69_wEXIMDXmIV7SXZxCcktitxBOc9CbfDC1gL_5kEELhR6NtED99Ru_EMwROdSONwKCBwQo0sM4M9F-14y1y-rZm9PKtJ4jcyHvWcnoMXvoHIN3ezYgxMAtpMPs5QyA1O-dAx6SadSGPMHGDInwpSMP55gQSX8TfD4A6p-w?width=600&height=600&cropmode=none"/>
					</div>
					<div className="article-info">
						<h3 className="article-headline">Решения за големи обекти</h3>
						<h4>24/7</h4>
						<p className="article-text">
							Ако вашият офис или производство е с по-голям брой служители или имате многобройни клиенти и
							посетители ние препоръчваме големи еспресо автомати - вендинг машини. Благодарение на тях
							вие ще разполагате с между 8 и 23 вида напитки, 24 часа в денонощието, 7 дни в седмицата.
						</p>
					</div>
				</article>

				<article id="coffee-teaser" className="article">
					<div className="image-container">
						<img
							src="https://4zzlqw.db.files.1drv.com/y4mqAJKZ0altBL23zCupd3HO64jG3rT0oVotbT2bn9ABAVdcRktTIFM55EtTzff3ElCZ7LuKQB2q85f0cX_9kYh5-a8Z1tOzibGU3fRCm_I_Y9F7_YBMscC35iXPuuzfQ-tjVL27k2mHWBwDw3UuyZuUAW3GpUMdF9MtwTR9dq-5FWQwr-xJgrJ1H7xiWSihJHUXwBvy6Hh3eBfPlqMDuc6zA?width=2500&height=1667&cropmode=none"/>
					</div>
					<div className="article-info">
						<h3 className="article-headline">Нашето кафе</h3>
						<img src="/images/logo/TOKO_logo_BW.svg" className="logo"/>
						<h2 className="section-headline">Office Coffee Beans</h2>
						<p className="article-text">
							Специални кафе селекции, притежаващи уникален букет от вкус, аромат и интензитет.<br/>
							Всяка една разкрива различна страна на истинското еспресо.
						</p>
					</div>
				</article>

				<article id="promo-teaser-2" className="article">
					<div className="image-container">
						{/*<img src="https://7ypwbg.db.files.1drv.com/y4mhwDdsv8WmLAKcczNxVy-C6WYD93PWUiyUtNMGZMKDoU-pZxOAPYOuXL8S9cB1Na227ED8zoBIXepBxqEKD0-YYQ6Y3yqzUUsLfWTLq1zfx01esjSnv1nfwaFdeHloP5Gp2ur1DvnSUABZr7iKkJD2udOy6nKG-_AWZFv1CPbqKLZ79n1BBHfZY5xbSi5eFbyiA2RwabcTkGVIYiw2gO_Zg?width=2000&height=1979&cropmode=none"/>*/}
						<img src="https://edqvww.db.files.1drv.com/y4mlRz2RqmBy5vw2CxQe5yA2dUjLwsVhLAB44Ihc207Jzm6ZS2-B8IO_r7MuDK7j0_n-0NKvEuTusOU2ovrl7aRfQsIKAfzPgYcNUgjreUxVU-ykbnr79IbMiYuYq8JTneSRk5Lnu4aw5R9hr172iCROg2BLYx75KMqbsnwBzSAwp5HtmvVMisxHKsjkzhad7kNxrYmf4Afr8LB_rb9XWyFBA?width=2000&height=1979&cropmode=none"/>
					</div>
					<h3 className="article-headline">-50%</h3>
					<div className="article-info">
						<h4>-50%</h4>
						<p className="article-text">
							Възползвайте се от нашето специално предложение:<br/>
							Пробвайте 1 месец нашето кафе с безплатна машина на 1/2 цена.
						</p>
					</div>
				</article>

			</div>
		);
	}
}

export default Teasers;
