import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch, NavLink } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Error from './components/Error/Error';

class App extends Component {
	render () {
		return (
			<BrowserRouter>
				<div>
					<header>
						<nav>
							<ul>
								{/* use Link (or NavLink) component to prevent the app from reloading the page */}
								<li><NavLink 
									to="/users" 
									exact 
									activeStyle={{
											color: '#FA923F', 
											textDecoration: "underline"
									}}>Users</NavLink></li>
								<li><NavLink
									to="/courses"
									exact
									activeStyle={{
										color: '#FA923F', 
										textDecoration: "underline"
								}}>Courses</NavLink></li>
							</ul>
						</nav>
					</header>
					<Switch>
						<Route path="/users" component={Users} />
						<Route path="/courses" component={Courses} />
						<Redirect from="/all-courses" to="/courses" />
						<Route component={Error}/>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
