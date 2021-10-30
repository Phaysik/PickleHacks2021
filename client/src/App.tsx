import React from 'react';
import PicklePeriodic from './elements/PicklePeriodic/PicklePeriodic';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Admin } from './Admin/admin';
import Header from './elements/Header/Header';
import Footer from './elements/Footer/Footer';

export default function App() {
	return (
        <div>
            <Header />
            <Router>
                <Switch>
                    <Route exact path="/admin">
                        <Admin />
                    </Route>
                    <Route exact path="/">
                        <PicklePeriodic />
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </div>
	);
}
