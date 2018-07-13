import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import Home from './pages/home/Home'
import Portfolio from './pages/portfolio/Portfolio'

const maxWidth1200 = {
	maxWidth: '1200px'
}

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<div id="router-div">
						<div className="w-100 bg-dark">
							<div className="container">
								<nav className="navbar navbar-expand-sm navbar-dark bg-dark m-auto px-0" href="/home" style={maxWidth1200}>
									<Route
										exact={true}
										children={() => (
											<Link to="/" className="navbar-brand">Blake L. Mason</Link>
										)}
									/>
									<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
										<span className="navbar-toggler-icon" />
									</button>
									<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
										<ul className="navbar-nav ml-auto">
											<li className="nav-item">
												<PageLink activeOnlyWhenExact={true} to="/" label="Home" />
											</li>
											<li>
												<PageLink activeOnlyWhenExact={true} to="/portfolio" label="Portfolio" />
											</li>
										</ul>
									</div>
								</nav>
							</div>
						</div>
						<div className="m-auto" style={maxWidth1200}>
							<Route exact path="/" component={Home} />
							<Route exact path="/portfolio" component={Portfolio} />
						</div>
					</div>
				</Router>
			</div >
		);
	}
}

const PageLink = ({ label, to, activeOnlyWhenExact }) => (
	<Route
		path={to}
		exact={activeOnlyWhenExact}
		children={({ match }) => (
			<Link to={to} className={"nav-link" + (match ? " active" : "") + (label === "Portfolio" ? " pr-0" : "")}>{label}</Link>
		)}
	/>
);

export default App;
