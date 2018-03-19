import React, { Component } from 'react';

import './App.css';

import Navbar from '../Navbar/Navbar';

export default class App extends Component {

    render() {
        return (<div>
            <Navbar />
            <h1>App Works</h1>
        </div>);
    };
}