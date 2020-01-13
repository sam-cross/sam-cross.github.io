import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Header from './components/Header.js';

import Home from './pages/Home.js';
import Uses from './pages/Uses.js';

function App() {
	return (
		<div className="App">
			<Router basename="/">
				<Header />
				
				<Switch>
					<Route exact path="/"><Home /></Route> 
					<Route path="/uses"><Uses /></Route>

					<Route path="*"><Home /></Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
