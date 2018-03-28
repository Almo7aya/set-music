import React, { Component } from 'react';

import './Navbar.css';

export default class Navbar extends Component {

    render() {
        return (
        <nav className="Navbar">
            <div className="container">
                <h3>Music UP</h3>
                <ul>
                    <li>Discover</li>
                    <li>My</li>
                    <li>New</li>
                </ul>
            </div>
        </nav>);
    };
}