import {NotificationContainer} from 'react-notifications';
import React from 'react';

import 'react-notifications/lib/notifications.css';

import './App.scss';
import NavBar from './components/Navigation/nav';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Rarity from './pages/Rarity/Rarity';
import RoadMap from './pages/Roadmap/Roadmap';
import Team from './pages/Team/Team';
import Footer from './pages/Footer/Footer';
import TopMenu from './pages/TopMenu/TopMenu';
import Join from './pages/Join/Join';

function App() {
	return (
		<div className="App">
			<TopMenu />

			<NavBar />
			<Home />
			<About />
			<Rarity />
			<RoadMap />
			<Team />

			<Join />
			<Footer />
			<NotificationContainer />
		</div>
	);
}

export default App;
