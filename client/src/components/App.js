import React, { Component } from 'react';
//RHL only for front end development
import { hot } from 'react-hot-loader';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class App extends Component {
  render() {
    return <Router>
      <div>
        <Header />
        <Route exact path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
      </div>
    </Router>;
  }
}
//hot export works with RHL. Remove line 11 when starting fullstack integration
export default hot(module)(App);
//Uncomment line 13 & delete line 11 when starting fullstack integration
// export default App;