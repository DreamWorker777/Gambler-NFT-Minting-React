import {NotificationContainer} from 'react-notifications';
import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
  } from "react-router-dom";

import 'react-notifications/lib/notifications.css';

import './App.scss';

import Home from './pages/Home/Home';

import Footer from './pages/Footer/Footer';
import TopMenu from './pages/TopMenu/TopMenu';
import Join from './pages/Join/Join';

function App() {
	return (
		<Router>
			<div className="App">
				<TopMenu />

				<Switch>
					<Route exact path='/' component={Home} />
					{/* <Route path='/mint' component={Mint} /> */}
				</Switch>

				<Join />
				<Footer />
				<NotificationContainer />
			</div>
		</Router>
	);
}

export default App;
