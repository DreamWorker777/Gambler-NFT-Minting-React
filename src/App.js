import {NotificationContainer} from 'react-notifications';
import OnImagesLoaded from 'react-on-images-loaded';
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

import LoadingImg from './assets/img/icons/logo.svg';

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

	const hideLoading = () => {
		setIsLoading(false);
			
		setTimeout(() => {
			setShowLoading(false);
		}, 1000)
	}

	return (
		<Router>
			{ showLoading ? <Loading isLoading={isLoading}/> : null}

			<OnImagesLoaded
				onLoaded={() => { hideLoading() }}
			>			
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
			</OnImagesLoaded>

		</Router>
	);
}

export default App;
