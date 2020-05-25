import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const StyledButton = styled.button`
background-color: green;
color: white;
font: inherit;
border: 1px solid blue;
padding: 8px;
cursor: pointer;

&:hover {
  backgroundColor: lightgreen;
  color: black;
`

class App extends Component {
state = {
  persons: [
    {id: 'asd', name: "Max", age: 28},
    {id: 'dsa', name: "Manu", age: 29},
    {id: 'ads', name: 'Stephanie', age: 25}
  ],
  otherState: 'some other value',
  showPersons: false
};


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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
      }
    };
    
    let people = null;

    if (this.state.showPersons) {
      people = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            name={person.name} 
            age={person.age}
            click={()=>this.deletePersonHandler(index)}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div> 
      );
      style.backgroundColor= 'red'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (

    <div className="App">
        <p className={classes.join(' ')}>    Learn React      </p>
        <StyledButton
        onClick={this.togglePersonsHandler}>Swtich Name</StyledButton>
      {people}
    </div>

    )
  }

}

export default App;
