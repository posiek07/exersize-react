import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <p>    Learn React      </p>
        
        <Person />
        <Person />
        <Person />
        <Person />
      </header>
      
    </div>

    //React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'hi, I\'m a React App'))
    )  
  }
}

export default App;
