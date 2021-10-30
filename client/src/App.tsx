import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Admin } from './Admin/admin';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/admin">
					<Admin />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
