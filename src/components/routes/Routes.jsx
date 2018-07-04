import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Private route
import PrivateRoute from './PrivateRoute';

// Components
import Home from '../pages/home/Home';
import Offices from '../pages/offices/Offices';
import Vending from '../pages/vending/Vending';
import Prices from '../pages/prices/Prices';

// ERRORS and CONFIRMATIONS
import Error from '../errors/Error';
import NotFound from '../errors/NotFound';


let Routes = () => {
	return (
		<Switch>
			<Route exact path='/' component={Home}/>
			<Route path='/offices' component={Offices}/>
			<Route path='/vending' component={Vending}/>
			<Route path='/prices' component={Prices}/>

			/*Errors and Confirmations*/
			<Route path='/error' component={Error}/>

			/*Rest*/
			<Route path='*' component={NotFound}/>
		</Switch>
	);
};

export default Routes;