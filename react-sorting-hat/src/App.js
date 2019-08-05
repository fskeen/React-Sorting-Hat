import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SortingForm from './components/SortingForm'

class App extends Component {
  constructor(props) {
    super(props);
    // set state here
    this.toggleVis = this.toggleVis.bind(this);
    this.state = {
        visibility: false
    }
  };

  toggleVis () {
    return this.setState((a) => ({visibility: !a.visibility}))
  };

  render() {
    return (
      <div className="App">
        <h2>Welcome, new student! It's time to get sorted into your House.</h2>
        {!this.state.visibility && <button onClick={this.toggleVis}>BEGIN</button>}
        {this.state.visibility && <SortingForm />}
      </div>
    );
  }
}

export default App;
