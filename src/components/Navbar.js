// Navbar component
// Carlo Jacobs
// 08-06-2018

import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    const path = this.props.location.pathname;
    const homeNavItemClass = path == "/home" ? "nav-item active" : "nav-item"
    const tutorsNavItemClass = path == "/tutoren" ? "nav-item active" : "nav-item"
    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Bijles Doorn <i class="fas fa-chalkboard-teacher fa-lg"></i></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className={homeNavItemClass}>
                <a className="nav-link" href="/home">Home</a>
              </li>
              <li className={tutorsNavItemClass}>
                <a className="nav-link" href="/tutoren">Tutoren</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="http://www.revius.nl">Revius site</a>
              </li> */}
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="http://www.revius.nl">Revius site</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li> */}
            </ul>
            {/* <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
            </form> */}
          </div>
        </nav>
      </div>
    );
  }
}
