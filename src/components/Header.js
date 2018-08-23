import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <section className="jumbotron text-left" id="headerjumbo">
        <div className="container headercontainer">
          <h1 className="jumbotron-heading" id="jumbotext">Hulp nodig voor betere cijfers?</h1>
          <h5 className="" id="jumbotext">Zit uw kind in de eerste, tweede of derde klas op een middelbare school in Doorn, en kan hij of zij wel wat hulp gebruiken? Wij helpen graag! Als ervaren leerlingen van het Revius Lyceum in Doorn zijn wij gespecialiseerd in het leren voor en maken van toetsen.</h5>
          <div className="btn-group">
            <Link to="/tutoren" className={"btn btn-lg my-2 btn-" + this.props.style}>Tutoren</Link>
            <Link to="/info" className="btn btn-lg btn-light my-2">Meer info</Link>
          </div>
        </div>
      </section>
    );
  }
}
