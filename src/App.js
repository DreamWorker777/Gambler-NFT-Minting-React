import {NotificationContainer} from 'react-notifications';
import React from 'react';

import './App.scss';
import Home from './pages/Home/Home';
import NavBar from './components/Navigation/nav';
import 'react-notifications/lib/notifications.css';

function App() {
	return (
		<div className="App">
			<NavBar />
			<Home />
			<NotificationContainer />
		</div>
	);
}

export default App;
