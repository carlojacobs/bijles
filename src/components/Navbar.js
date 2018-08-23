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
    var navbar = (
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
    var navbar2 = (
      <header>
        <div class="collapse bg-dark" id="navbarHeader">
          <div class="container">
            <div class="row">
              <div class="col-sm-8 col-md-7 py-4">
                <h4 class="text-white">Over ons</h4>
                <p class="text-muted">Wij zijn een groep leerlingen van het <b>Revius Lyceum Doorn</b>. Allemaal doen wij VWO en zitten wij in de vierde klas of hoger. Wij kennen alle ins en outs van het schoolleven en kunnen uw kind helpen om betere cijfers te halen en de stof beter te begrijpen.</p>
              </div>
              <div class="col-sm-4 offset-md-1 py-4">
                <ul class="list-unstyled">
                  <li><Link to="/home" class="text-white">Home</Link></li>
                  <li><Link to="/tutoren" class="text-white">Tutoren</Link></li>
                  <li><Link to="/info" class="text-white">Info</Link></li>
                  <li><p className="text-muted">Email: carlojacobs@reviaandoorn.nl</p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="navbar navbar-dark bg-dark shadow-sm">
          <div class="container d-flex justify-content-between">
            <Link to="/home" class="navbar-brand d-flex align-items-center">
              <strong>Bijles Doorn</strong>
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </header>
    );
    return(navbar2);
  }
}
