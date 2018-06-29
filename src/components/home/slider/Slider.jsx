import React from 'react';

class Slider extends React.Component {

	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div id="carousel" className="carousel slide" >
				<div className="carousel-navigation">
					<a className="carousel-control-prev" href="#" role="button" >
						<i className="fa fa-arrow-left" aria-hidden="true"/>
						<span className="sr-only">Previous</span>
					</a>

					<a className="carousel-control-next" href="#" role="button" data-slide="next">
						<i className="fa fa-arrow-right" aria-hidden="true"/>
						<span className="sr-only">Next</span>
					</a>
				</div>

				<div id="slide-preview"/>

				<div className="carousel-content">
					<div className="carousel-item active">
						<div className="slide-text">
							<h1 className="headline">Всичко за кафето на работното място</h1>
							<p className="description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
						</div>
						<div className="slide-background" />
					</div>

					<div className="carousel-item ">
						<div className="slide-text">
							<h1 className="headline">Another One</h1>
							<p className="description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
						</div>
						<div className="slide-background"/>
					</div>

				</div>
			</div>
		);
	}
}

export default Slider;
