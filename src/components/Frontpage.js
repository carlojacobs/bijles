// Frontpage component
// Carlo Jacobs
// 08-06-2018

import React, { Component } from 'react';
import Header from './Header';

import { Link } from 'react-router-dom';

export default class Frontpage extends Component {
  constructor() {
    super();
    this.state = {
      style: "bijles"
    }
  }

  render() {
    const textStyleColor = this.state.style === "light" || this.state.style === "warning" ? "black " : "white "
    const textStyleColor2 = this.state.style === "light" || this.state.style === "warning" ? "dark " : "light "
    return(
      <div id="#frontpage">
        <Header style={this.state.style}/>
        <div className="container frontpagecontainer">
          <div className="row">
            <div className="col-md-9">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">Wie ben ik?</h1>
                  <h5 className="card-subtitle mb-2 text-muted">Goede vraag!</h5>
                  <p className="card-text" style={{fontSize: 1.2+'rem'}}>Ik ben Carlo en ik ben 16 jaar oud. Ik zit al 5 jaar op het Revius Lyceum in Doorn. Graag help ik uw kind om zijn of haar cijfers te verbeteren.</p>
                  <Link className={"btn btn-lg btn-" + this.state.style} to="/info">Meer over mij</Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 tarief-card">
              <div className={"card text-center text-" + textStyleColor + "bg-" + this.state.style + " mb-3"}>
                <div className="card-header">Tarief</div>
                <div className="card-body">
                  <h4 className="card-title">Ik werk voor:</h4>
                  <h2 className="card-title">€10/u</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mt-4">
              <div id="info" className="card carlo-card">
                <div className="card-body">
                  <h1 className="card-title">Hoe geef ik bijles?</h1>
                  <ol>
                    <li><h5>Opdrachten maken</h5></li>
                    <li><h5>Fouten analyseren</h5></li>
                    <li><h5>Overleg met de docent</h5></li>
                  </ol>
                  <p className="card-text" style={{fontSize: 1.2+'rem'}}>Als voormalige onderbouwleerling weet ik precies waar de valkuilen liggen en hoe deze te vermijden. Ik wil uw kind graag helpen met het beter begrijpen van de schoolstof. Vaak helpt het om opdrachten te maken en fouten goed te analyseren en te begrijpen, zodat deze niet herhaald worden.</p>
                </div>
              </div>
            </div>
            <div className="container mt-4 col-md-6">
              <div id="accordion">
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
                      Als u contact met mij wilt opnemen, kunt u mij mailen via <b>carlojacobs@reviaandoorn.nl</b>
                    </div>
                  </div>
                </div>
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
                        <li>Engels (ook op TTO niveau)</li>
                        <li>Natuurkunde / NASK</li>
                        <li>Scheikunde / NASK</li>
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
                      Uit ervaring weet ik dat een bijles effectief is als deze minimaal een <b>uur tot anderhalf uur</b> duurt.
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                      <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Locatie?
                      </button>
                    </h5>
                  </div>
                  <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                      Ik kom graag bij u <b>thuis</b>, of spreek met uw kind af op school in een <b>geschikte studieruimte</b>.
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
                      <b>Ter kennismaking</b> is het eerste half uur van de eerste afspraak <b>gratis</b>, hierin worden wat punten doorgenomen en bepalen we samen de aanpak.
                    </div>
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
