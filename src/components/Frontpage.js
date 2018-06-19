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
              <p className="lead">Zit uw kind in de eerste of tweede klas op het Revius Lyceum Doorn, en kan hij of zij wel wat hulp gebruiken? Wij helpen graag! Als ervaren Revianen zijn wij gespecialiseerd in het leren voor en maken van toetsen.</p>
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
            <div className="card carlo-card">
              <div className="card-body">
                <h5 className="card-title">Wie zijn wij?</h5>
                <h6 className="card-subtitle mb-2 text-muted">Goede vraag!</h6>
                <p className="card-text" style={{fontSize: 1.2+'rem'}}>Wij zijn een groep leerlingen die in de vierde klas of hoger zitten, en veel ervaring hebben met toetsen, huiswerk en andere schoolzaken. Graag helpen wij uw kind om zijn of haar cijfers te verbeteren.</p>
                <button onClick={this.scrollToTutors} className={"btn btn-lg btn-outline-" + this.state.style}>Oke! Wie kan ik inhuren?</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src="https://architectenweb.nl/media/illustrations/2016/05/32d63c4a-e671-42b6-ab95-98c8827bfecb_400.jpg" alt="school" className="rounded img-fluid"/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt-5">
            <div id="info" className="card carlo-card">
              <div className="card-body">
                <h1 className="card-title">Hoe geven wij bijles?</h1>
                <ol>
                  <li><h5>Opdrachten maken</h5></li>
                  <li><h5>Fouten analyseren</h5></li>
                  <li><h5>Overleg met de docent</h5></li>
                </ol>
                <p className="card-text" style={{fontSize: 1.2+'rem'}}>Als voormalige eerste en tweede klassers weten wij precies waar de valkuilen liggen en hoe deze te vermijden. Wij willen uw kind graag helpen met het beter begrijpen van de schoolstof. Vaak helpt het om opdrachten te maken en fouten goed te analyseren en te begrijpen, zodat deze niet herhaald worden.</p>
              </div>
            </div>
          </div>
          <div className="container mt-5 col-md-6">
            <div id="accordion">
              <div class="card">
                <div class="card-header" id="headingFive">
                  <h5 class="mb-0">
                    <button class="btn btn-link" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                      Bijles vakken
                    </button>
                  </h5>
                </div>
                <div id="collapseFive" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                  <div class="card-body">
                    <b>Bijles vakken:</b>
                    <ul>
                      <li>Wiskunde</li>
                      <li>Engelse (ook op TTO niveau)</li>
                      <li>Natuurkunde / NASK</li>
                      <li>Scheikunde / NASK</li>
                      <li>Economie</li>
                      <li>Geschiedenis</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingTwo">
                  <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Hoe lang duurt de gemiddelde bijles?
                    </button>
                  </h5>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div class="card-body">
                    Uit ervaring weten wij dat een bijles effectief is als deze minimaal een <b>uur tot anderhalf uur</b> duurt.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0">
                    <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      Waar geven wij bijles?
                    </button>
                  </h5>
                </div>
                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                  <div class="card-body">
                    Wij komen bij u <b>thuis</b>, of spreken met uw kind af op school in een <b>geschikte studieruimte</b>.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingThree">
                  <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Eerste half uur gratis!
                    </button>
                  </h5>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                  <div class="card-body">
                    <b>Ter kennismaking</b> is het eerste half uur van de eerste afspraak <b>op onze kosten</b>, hierin worden wat punten doorgenomen en bepalen wij samen de aanpak.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0">
                    <button class="btn btn-link" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Contact opnemen?
                    </button>
                  </h5>
                </div>
                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                  <div class="card-body">
                    Als u contact met ons wilt opnemen, kunt u ons <b>bellen of mailen</b>. De contactgegevens per tutor vindt u hieronder.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
