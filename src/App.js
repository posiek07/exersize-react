import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
const [ personsState, setPersonsState ] = useState({
  persons: [
    {name: "Max", age: 28},
    {name: "Manu", age: 29},
    {name: 'Stephanie', age: 25}
  ],
});

// const [otherState, setOtherState] = useState ('some other value')

// console.log(personsState, otherState)

const switchNameHandler = () => {
 //DONT DO THIS!!!!! this.state.persons[0].name = "Daniel"
 setPersonsState({
  persons: [
  {name: "Daniel", age: 28},
  {name: "Manu", age: 29},
  {name: 'Stephanie', age: 25}
],
})
};

    return (
    <div className="App">
      <header className="App-header">
        <p>    Learn React      </p>
        <button onClick={switchNameHandler}>Swtich Name</button>
        <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}/>
        <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}>My Hobbies: Cofee</Person>
        <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age}
        />
      </header>
      
    </div>

    //React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'hi, I\'m a React App'))
    )  
  }


export default App;
