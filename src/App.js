import React, { Component } from 'react';
import './stylesheets/App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Frontpage from './components/Frontpage';
import Tutors from './components/Tutors';
import Footer from './components/Footer';
import Info from './components/Info';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/(home|tutoren|info)/" exact component={Navbar}/>
            <Route exact path="/" render={() => (
              <Redirect to="/home"/>
            )}/>
            <Route path="/home" exact component={Frontpage}/>
            <Route path="/info" exact component={Info}/>
            <Route path="/(home|info|tutoren)/" exact component={Footer}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
