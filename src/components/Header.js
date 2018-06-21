import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Hulp nodig voor betere cijfers?</h1>
          <p className="lead text-muted">Zit uw kind in de eerste of tweede klas op een middelbare school in Doorn, en kan hij of zij wel wat hulp gebruiken? Wij helpen graag! Als ervaren leerlingen van het Revius in Doorn zijn wij gespecialiseerd in het leren voor en maken van toetsen.</p>
          <div className="btn-group">
            <a href="/tutoren" className={"btn btn-lg my-2 btn-" + this.props.style}>Tutoren</a>
            <a href="/home" className="btn btn-lg btn-secondary my-2">Meer info</a>
          </div>
        </div>
      </section>
    );
  }
}