import React from 'react';
import PicklePeriodic from './PicklePeriodic';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Admin } from './Admin/admin';

export default function App() {
    return (
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
    );
}
