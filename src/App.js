import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Caesar";
class App extends Component {
  render() {
    return (
      <div className="App">
       <WordCard value="Caesar"/>    
      </div>
      
    );
  }
}

export default App;
