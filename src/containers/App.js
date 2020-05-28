import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from  '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');

    }
  
state = {
  persons: [
    {id: 'asd', name: "Max", age: 28},
    {id: 'dsa', name: "Manu", age: 29},
    {id: 'ads', name: 'Stephanie', age: 25}
  ],
  otherState: 'some other value',
  showPersons: false,
  showCockpit: true,
};

componentDidMount() {
  console.log('[App.js] componentDidMount')
}

shouldComponentUpdate(nextProps, nextState) {
  console.log('[App.js] shouldComponentUpdate')
  return true
}

componentDidUpdate() {
  console.log('[App.js] componentDidUpdate')
}

nameChangedHandler = (event, id) => {
  
  const  personIndex  = this.state.persons.findIndex(p => {
    return p.id === id;
  })
  
  const person = {...this.state.persons[personIndex]}

//const peron = Object.assign({}. this.state.persons[personIndex]) --- other way

person.name = event.target.value;

const persons = [...this.state.persons]
persons[personIndex] = person

  this.setState( {persons: persons} )
}

deletePersonHandler = (personIndex) =>{
  const persons = [...this.state.persons]
  persons.splice(personIndex, 1);
  this.setState({persons: persons})
}


togglePersonsHandler = () => {
  const doasShow = this.state.showPersons;
  this.setState ({showPersons: !doasShow})
}


  render() {
    
    let people = null;
    console.log('[App.js] RENDER!');

    if (this.state.showPersons) {
      people = 
          <Persons 
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          persons={this.state.persons} />
    }

   

    return (
     
    <div className={classes.App}>
       <button onClick={() => {this.setState({showCockpit: false})}}>Remove Cockpit</button>
      {this.state.showCockpit ? <Cockpit 
      title={this.props.appTitle}
      showPersons={this.state.showPersons}
      persons={this.state.persons}
      clicked={this.togglePersonsHandler} /> : null}
      {people}
    </div>

    )
  }
}


export default App;
