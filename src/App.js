import React, { Component } from 'react';
import './stylesheets/App.css';
import Navbar from './components/Navbar';
import Frontpage from './components/Frontpage';
import Tutors from './components/Tutors';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="container">
          <Frontpage/>
          <Tutors/>
        </div>
      </div>
    );
  }
}

export default App;
