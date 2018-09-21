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
      <header>
        <div class="collapse bg-dark" id="navbarHeader">
          <div class="container">
            <div class="row">
              <div class="col-sm-8 col-md-7 py-4">
                <h4 class="text-white">Over mij</h4>
                <p class="text-muted">Mijn naam is Carlo Jacobs en ik zit in VWO 5 op het <b>Revius Lyceum Doorn</b> Ik ken alle ins en outs van het schoolleven en kan uw kind helpen om betere cijfers te halen en de schoolstof beter te begrijpen.</p>
              </div>
              <div class="col-sm-4 offset-md-1 py-4">
                <ul class="list-unstyled">
                  <li><Link to="/home" class="text-white">Home</Link></li>
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
    return(navbar);
  }
}
