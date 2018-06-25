import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Private route
import PrivateRoute from './PrivateRoute';

// Components
import Home from '../home/Home';

// ERRORS and CONFIRMATIONS
import Error from '../errors/Error';
import NotFound from '../errors/NotFound';


let Routes = () => {
	return (
		<Switch>
			/*User*/
			<Route exact path='/' component={Home}/>

			/*Errors and Confirmations*/
			<Route path='/error' component={Error}/>

			/*Rest*/
			<Route path='*' component={NotFound}/>
		</Switch>
	);
};

export default Routes;