// Navbar component
// Carlo Jacobs
// 08-06-2018

import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    const path = this.props.location.pathname;
    const homeNavItemClass = path === "/home" ? "nav-item active" : "nav-item";
    const tutorsNavItemClass = path === "/tutoren" ? "nav-item active" : "nav-item";
    const infoNavItemClass = path === "/info" ? "nav-item active" : "nav-item"
    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/home">Bijles Doorn</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className={homeNavItemClass}>
                  <Link className="nav-link" to="/home">Home</Link>
                </li>
                <li className={tutorsNavItemClass}>
                  <Link className="nav-link" to="/tutoren">Tutoren</Link>
                </li>
                <li className={infoNavItemClass}>
                  <Link className="nav-link" to="/info">Info</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
