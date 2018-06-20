import React, { Component } from 'react';
import './stylesheets/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Frontpage from './components/Frontpage';
import Tutors from './components/Tutors';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/" component={Navbar}/>
            <Route path="/home" exact component={Frontpage}/>
            <Route path="/tutoren" exact component={Tutors}/>
          </div>
        </Router>
      </div>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Navbar/>
//         <div className="container">
//           <Frontpage/>
//           <Tutors/>
//         </div>
//       </div>
//     );
//   }
// }

export default App;
