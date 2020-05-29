import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from  '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/withClass'
import Aux from '../hoc/Auxiliary'
import AuthContext from '../context/auth-context'


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    this.state.person = []
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
  changeCounter: 0,
  auth: false
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

  this.setState((prevState, props) => {
    return {
    persons: persons, 
    changeCounter: prevState.changeCounter +1}} )
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

loginHandler = () => {
  this.setState({auth: true})
}

  render() {
    
    let people = null;
    console.log('[App.js] RENDER!');
    
    if (this.state.showPersons) {
      people = 
          <Persons 
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          persons={this.state.persons} 
          isAuthenticated={this.state.auth}/>
    }

   

    return (
     
    <Aux classes={classes.App}>
       <button onClick={() => {this.setState({showCockpit: false})}}>Remove Cockpit</button>
      <AuthContext.Provider value={{auth: this.state.auth, login: this.loginHandler}}>
      {this.state.showCockpit ? 
      <Cockpit 
      title={this.props.appTitle}
      showPersons={this.state.showPersons}
      personsLength={this.state.persons.length}
      clicked={this.togglePersonsHandler} 
      /> : null}
      {people}
      </AuthContext.Provider>
    </Aux>

    )
  }
}


export default withClass(App, classes.App);
