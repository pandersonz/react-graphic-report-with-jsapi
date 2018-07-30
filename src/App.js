import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HistogramGraph from './component/HistogramGraph';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HistogramGraph/>
      </div>
    );
  }
}

export default App;
