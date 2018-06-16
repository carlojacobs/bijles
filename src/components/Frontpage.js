// Frontpage component
// Carlo Jacobs
// 08-06-2018

import React, { Component } from 'react';
// import Tutors from 'Tutors';

export default class Frontpage extends Component {
  constructor() {
    super();
    this.state = {
      style: "success"
    }
  }

  scrollToTutors() {
    var rect = document.getElementById("tutors").getBoundingClientRect();
    window.scrollTo(0, rect.y);
  }

  render() {
    return(
      <div>
        <div className="row mt-4">
          <div className="col-md-9">
            <div className="jumbotron">
              <h1>Hulp nodig voor betere cijfers?</h1>
              <p className="lead">Zit uw kind in de eerste of tweede klas op het Revius Lyceum Doorn, en kan hij of zij wel wat hulp gebruiken? Wij helpen graag! Onze ervaren revianen zijn gespecializeerd in het leren voor en maken van toetsen.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className={"card text-white bg-" + this.state.style + " mb-3"} style={{maxWidth: 18 + 'rem'}}>
              <div className="card-header">Tarief</div>
              <div className="card-body">
                <h4 className="card-title">Wij werken voor:</h4>
                <h2 className="card-title">€14,99/u</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Wie zijn wij?</h5>
                <h6 className="card-subtitle mb-2 text-muted">Goede vraag!</h6>
                <p className="card-text" style={{fontSize: 1.2+'rem'}}>Wij zijn een groep leerlingen die in de vierde klas of hoger zitten, en veel ervaring hebben met toetsen, huiswerk en andere schoolzaken. Wij zouden uw kind graag willen helpen om zijn of haar cijfers te verbeteren.</p>
                <button onClick={this.scrollToTutors} className={"btn btn-lg btn-outline-" + this.state.style}>Oke! Wie kan ik inhuren?</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src="https://architectenweb.nl/media/illustrations/2016/05/32d63c4a-e671-42b6-ab95-98c8827bfecb_400.jpg" alt="school" className="rounded img-fluid"/>
          </div>
        </div>
        <div id="info" className="container mt-5 border rounded pt-4 pr-4 pl-4 pb-4">
          <h1>Hoe geven wij bijles?</h1>
          <h5>Wij willen uw kind graag helpen me het beter begrijpen van de schoolstof. Vaak helpt het om opdrachten te maken en fouten goed te analyseren en te begrijpen, zodat deze niet meer gemaakt worden. Als voormalige eerste en tweede klassers weten wij precies waar de valkuilen liggen en hoe deze vermeden kunnen worden.</h5>
        </div>
      </div>
    );
  }
}
