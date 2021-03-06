// Tutors component
// Carlo Jacobs
// 08-06-2018

import React, { Component } from 'react';

export default class Tutors extends Component {

  constructor() {
    super();
    var dummyImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEUAmf8Al/8Alf8Ak/8Akf8AnP/p9P8Am//n8v8HoP/z+/8Aj//w+f/7//9Tsv/t9//D5f8iqf+Xz/9FtP8+rP+63/85sP8ipv/O6/9mwP/V7v9Hr//h8//J5P+W0/9isf9ru/9Vuv+Gy/95wv9zxf+m1v9dt/9AqP+h0P+Lzv++4f+h2f/K6P8xo/+v3v+RyP/b7P+s1P+55v+nqJTJAAADkklEQVR4nO3Y3XaiPBiGYd4ERKhIUVscxNaRivZHO9PzP7iJIDqAtd2Y0m9967525FGIeSUkWVoWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0DUx6tm6EC83dOnKzzf0T4nS0XgcaVVl7YzHnpLz8VJDWt2aU+2qIWV741tPy/nYHTd/Dnr9fujfOeUbw8Tv9Qfp0D0b3+dlL+ZMc2pWZlmmg37fv56cjR1a714njtZenu72JcoiGMWujpeDoqONeIEsnhaRa6vtKF3u76KM/GwrKtqlQ2nHLjle+XSo3L83B9veqBhIahmu2/ESzymGsqjXwDYveTApCnV2yVUrfg9vuhBLPSZeGZ2XZ9WMnyIT3wwG53pnlzH2f0ozfg8vMRXqdHMoRL36djMeOHF1JLHXakdmgViyDqvRaM/nuhG/qIIPqOF+HF4Fi0NPZBhYzXg4XISTsm7xkrvWndWbRFtyn66rhh/60ohfVcO7RJTy8jAzP33kz6rvj8Oxqsdjz0bBpHjk1sn1VaMhMTONuUYtp9XdldtBpOux6xJlkb3+3t3k5ntlHB5HoNP7qerx1LGRbwaduYNPzt8NeZlp6Hm1r17dnT7y/Imux64r1G/TJAieHVVUeHqw+j9UPZ46JivTa2967dT6un6bpsHgwSoqvDkuoK4/0/XY+TDVRjwaLD9foVnegnx63Zz3tbbV5Ck1o+E/VuGe6Nz0TG7ro/T2nVG6v4vB/Ow2R8zmxTXLTH2UPn7rKK3c3GirNrVE0oinc8V7SasZtcnpPUhtpgm3jfgFnf8MtUn1p1YL6zCLHmbUFvvXSsl9eFoeetKIX9L/j6nNVFt6Wi3xMgrtZqwUs6iUM2qb/etOyfq4/1TzG92IX1fERe5Te5t2ftcmh1l0P6O2B6p4YW2bFvnt2CnPK75QVBbsf+ZtutrvxEWPiselEUvHhV7+HqjbcukQ67dvFVvtvLjSmU/tVuyS5C+vsWM5s42/LHO6mrjuZBNkZ2J5yXB1nBhX2bHCx6dF7FrecB7mxYZnGS5j0+48nZ2JXfKyN7/X6wXJ8NDt2dREPxlaZ2PBPXNkbZfJoNcLg93s8EaWhKbdXXWXG7FDoiWKYjn+vWCO4six34kXKNsxDenT3xZm8Ynkvditf/YPUasd+eBzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw//EHB2VDCUNSxSYAAAAASUVORK5CYII=";
    this.state = {
      tutors: [
        {"name": "Carlo Jacobs", "klas": "4 vwo, IB", "email": "carlojacobs@reviaandoorn.nl", "description": "Wiskunde, Natuurkunde, Scheikunde, Engels", "imageLink": dummyImage, "phone": "06 34 64 36 33"},
        {"name": "Carlo Jacobs", "klas": "4 vwo, IB", "email": "carlojacobs@reviaandoorn.nl", "description": "Wiskunde, Natuurkunde, Scheikunde, Engels", "imageLink": dummyImage, "phone": "06 34 64 36 33"},
        {"name": "Carlo Jacobs", "klas": "4 vwo, IB", "email": "carlojacobs@reviaandoorn.nl", "description": "Wiskunde, Natuurkunde, Scheikunde, Engels", "imageLink": dummyImage, "phone": "06 34 64 36 33"},
        {"name": "Carlo Jacobs", "klas": "4 vwo, IB", "email": "carlojacobs@reviaandoorn.nl", "description": "Wiskunde, Natuurkunde, Scheikunde, Engels", "imageLink": dummyImage, "phone": "06 34 64 36 33"}
      ]
    }
    this.getTutorElements = this.getTutorElements.bind(this);
  }

  getTutorElements() {
    var elements = [];
    for (let i = 0; i < this.state.tutors.length; i++) {
      var tutor = this.state.tutors[i];
      var newElement = (
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img className="card-img-top" src={tutor["imageLink"]} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">{tutor["name"]}, {tutor["klas"]}</h5>
              <p className="card-text">
                <b>Vakken:</b> {tutor["description"]}
                <br/>
                <b>Telefoon:</b> {tutor["phone"]}
                <br/>
                <b>Email:</b> {tutor["email"]}
              </p>
              <div className="d-flex justify-content-between align-items-center">
                {/*
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                */}
                <small className="text-muted">{tutor["klas"]}</small>
              </div>
            </div>
          </div>
        </div>
      );
      elements.push(newElement);
    }
    return elements;
  }

  render() {
    var elements = this.getTutorElements();
    return(
      <div>
        <section class="jumbotron text-center tutor-jumbo">
          <div class="container">
            <h1 class="tutor-jumbo-heading">Tutoren</h1>
            <p class="lead text-muted">Als u een van ons wilt inhuren, of als u nog vragen heeft, neem dan gerust contact met ons op. Dit kan via email of telefoon. Verdere details zoals beschikbaarheid en betaling kunt u overleggen met de tutor.</p>
          </div>
        </section>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              {elements}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
