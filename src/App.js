import {NotificationContainer} from 'react-notifications';
import React, { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
  } from "react-router-dom";

import 'react-notifications/lib/notifications.css';

import './App.scss';

import Home from './pages/Home/Home';
import Mint from './pages/Mint/Mint';

import Footer from './pages/Footer/Footer';
import TopMenu from './pages/TopMenu/TopMenu';
import Join from './pages/Join/Join';

import LoadingImg from './assets/img/tags/5.png';

const Loading = ({ isLoading }) => {
	return (
		<div className={`loading ${ isLoading ? '' : 'fade-hide' }`}>
			<img alt="loading" src={ LoadingImg }></img>

			<p>Loading...</p>
		</div>
	)
}

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [showLoading, setShowLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
			
			setTimeout(() => {
				setShowLoading(false);
			}, 1000)
		}, 1000);
	})

	return (
		<Router>
			<div className="App">
				<TopMenu />

				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/mint' component={Mint} />
				</Switch>

				<Join />
				<Footer />
				<NotificationContainer />
			</div>

			{ showLoading ? <Loading isLoading={isLoading}/> : null}
		</Router>
	);
}

export default App;
