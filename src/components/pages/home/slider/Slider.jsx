import React from 'react';
import $ from 'jquery';

const TIMER_INTERVAL = 8000;

class Slider extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			activeSlideIndex: 0,
			direction: 'next'
		};

		this.carousel = React.createRef();
		this.slidePreview = React.createRef();
		this.carouselNavigation = React.createRef();
		this.timer = null;
	}

	componentDidMount () {
		this.startTimer();
	};

	componentWillUnmount () {
		this.stopTimer();
	}

	startTimer = () => {
		this.timer = setInterval(this.changeSlide, TIMER_INTERVAL);
	};

	stopTimer = () => {
		clearInterval(this.timer);
	};

	changeSlide = () => {
		let index = this.state.activeSlideIndex + 1;

		if (this.state.activeSlideIndex === this.carousel.current.children.length - 1) {
			index = 0;
		}

		this.loadSlide(index);
	};

	loadSlide = (selectedIndex) => {
		this.stopTimer();

		let activeSlideIndex = this.state.activeSlideIndex;
		let carouselSlides = this.carousel.current.children;
		let previewBoxes = this.slidePreview.current.children;
		let activeSlide = carouselSlides[activeSlideIndex];
		let slideToShow = carouselSlides[selectedIndex];

		if (selectedIndex === activeSlideIndex) return;

		// activeSlide.className = 'carousel-item';
		// slideToShow.className = 'carousel-item active';
		activeSlide.classList.remove('active');
		slideToShow.classList.add('active');

		previewBoxes[activeSlideIndex].classList.remove('nav-active');
		previewBoxes[selectedIndex].classList.add('nav-active');

		this.setState({activeSlideIndex: selectedIndex});

		this.startTimer();
	};

	render () {
		return (
			<div id="carousel" className="">
				<div className="carousel-navigation" ref={this.carouselNavigation}>
					<a className="carousel-control-prev" href="#" role="button">
						<i className="fa fa-arrow-left" aria-hidden="true"/>
						<span className="sr-only">Previous</span>
					</a>

					<a className="carousel-control-next" href="#" role="button" data-slide="next">
						<i className="fa fa-arrow-right" aria-hidden="true"/>
						<span className="sr-only">Next</span>
					</a>
				</div>

				<div id="slide-preview" ref={this.slidePreview}>
					<span className="slide-preview nav-active"
					      onClick={() => this.loadSlide(0)}/>
					<span className="slide-preview"
					      onClick={() => this.loadSlide(1)}/>
				</div>

				<div className="carousel-content" ref={this.carousel}>
					<div className="carousel-item active">
						<div className="slide-text">
							<h1 className="headline">Всичко за кафето на работното място</h1>
							<p className="description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
								veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
						</div>
						<div className="slide-background"/>
					</div>

					<div className="carousel-item ">
						<div className="slide-text">
							<h1 className="headline">Another One</h1>
							<p className="description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
								veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
						</div>
						<div className="slide-background"/>
					</div>
				</div>
			</div>
		);
	}
}

export default Slider;
