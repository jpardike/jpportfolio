import React from 'react';
import './nav.css';

class NavBar extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <nav className="navbar navbar-expand-md navbar-dark fixed-top scrolling-navbar"
                id="nav-bar">
                    <a className="navbar-brand" href="#hero" id="nav-text">Joshua Pardike</a>
                    <button className="navbar-toggler" 
                            type="button" 
                            data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" 
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse"  id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#hero" id="nav-text">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about-me" id="nav-text">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projects" id="nav-text">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact" id="nav-text">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>    
            </div>
        )
    }
}

export default NavBar;