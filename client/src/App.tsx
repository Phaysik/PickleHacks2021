import React from 'react';
import PicklePeriodic from './PicklePeriodic';
import Header from './elements/Header/Header';
import Footer from './elements/Footer/Footer';
import './App.css';

export default function App() {
    return (
        <div className="App">
            <Header />
            <PicklePeriodic />
            <Footer />
        </div>
    );
}
