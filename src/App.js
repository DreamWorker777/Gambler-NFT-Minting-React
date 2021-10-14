import {NotificationContainer} from 'react-notifications';
import React from 'react';

import 'react-notifications/lib/notifications.css';

import './App.scss';
import NavBar from './components/Navigation/nav';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Rarity from './pages/Rarity/Rarity';
import RoadMap from './pages/Roadmap/Roadmap';

function App() {
	return (
		<div className="App">
			<NavBar />
			<Home />
			<About />
			<Rarity />
			<RoadMap />
			<NotificationContainer />
		</div>
	);
}

export default App;
