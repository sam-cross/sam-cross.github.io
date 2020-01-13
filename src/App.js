import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Header from './components/Header.js';
import Footer from './components/Footer.js';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Uses from './pages/Uses.js';
// import Portfolio from './pages/Portfolio.js';
// import Contact from './pages/Contact.js';
import Error from './pages/Error.js';

function App() {
	return (
		<div className="App">
			<Router hashtype="noslash">
				<Header />
				
				<Switch>
					<Route exact path="/" component={ (props) => (<Home {...props} />) } />
					<Route path="/about" component={ (props) => (<About {...props} />) } />
					<Route path="/uses" component={ (props) => (<Uses {...props} />) } />
					{/*<Route path="/portfolio" component={ (props) => (<Portfolio {...props} />) } />*/}
					{/*<Route path="/contact" component={ (props) => (<Contact {...props} />) } />*/}

					<Route path="*" component={ (props) => (<Error {...props} />) } />
				</Switch>

				<Footer />
			</Router>
		</div>
	);
};

export default App;
