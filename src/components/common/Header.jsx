import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class Header extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			lastScroll: null,
		};

		this.header = null;
	}

	componentDidMount () {
		this.header = document.getElementById('header');
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount () {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = () => {
		let wScroll = window.scrollY;
		if (wScroll > 400) {
			this.header.classList.add('hidden');
		} else {
			this.header.classList.remove('hidden');
		}
	};

	// handleScroll = () => {
	// 	let wScroll = window.scrollY;
	// 	if (wScroll > this.state.lastScroll && wScroll > 400) {
	// 		this.header.classList.add('hidden');
	// 	} else {
	// 		this.header.classList.remove('hidden');
	// 	}
	// 	this.setState({lastScroll: wScroll});
	// };


	render () {
		return (
			<header id="header" className="">
				<nav id="header-nav">

					<Link to="/" className="brand-container">
						<img src="/images/logo/TOKO_logo.svg" className="logo" alt="TOKO logo"/>
					</Link>

					<ul className="nav-primary">
						<li className="nav-item">
							<NavLink to="/offices" className="nav-link"
							         activeClassName="nav-link-active">Офиси</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/vending" className="nav-link" activeClassName="nav-link-active">Големи
								обекти</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/coffee" className="nav-link" activeClassName="nav-link-active">Кафе</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/machines" className="nav-link"
							         activeClassName="nav-link-active">Машини</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/prices" className="nav-link" activeClassName="nav-link-active">Цени</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default Header;
