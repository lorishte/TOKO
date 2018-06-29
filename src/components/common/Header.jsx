import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class Header extends React.Component {

	constructor (props) {
		super(props);
	}

	render () {
		return (
			<header id="header">
				<nav id="header-nav">

					<NavLink to="/" className="brand-container">
						<img src="/images/logo/TOKO_logo.svg" className="logo" alt="TOKO logo"/>
					</NavLink>

					<ul className="nav-primary">
						<li className="nav-item">
							<NavLink to="/" className="nav-link">Офиси</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/" className="nav-link">Големи обекти</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/" className="nav-link">Кафета</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/" className="nav-link">Машини</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/" className="nav-link">Цени</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default Header;
