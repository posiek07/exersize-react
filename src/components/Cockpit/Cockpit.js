import React, { useEffect } from 'react'
import classes from './Cockpit.module.css'

const Cockpit = (props) => {
useEffect(() => {
    console.log('[Cockpit.js] useEffect component will mount')
    // send HTTP request...
    setTimeout(() => {
        alert('saved data to cloud')
    } ,1000);
    return() => {
        console.log('[Cockpit.js] Use Effect Component will unmount. CLEANUP!')
    }
}, []);
//When passed empty only renders at onload. Can control when something executes like componentDidMount.
//useEffect() <- can make more than one
useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect')
    return () => {
        console.log('Cockpit.js cleanup after 2nd useEffect'
        )
    }
}) 


    let someClasses = [];
    let btnClass = classes.button;

    if (props.showPersons) {
        btnClass = classes.button.Red; /// problem with changing this class
    }
    if (props.persons.length <= 2) {
      someClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      someClasses.push(classes.bold);
    }


    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
        <p className={someClasses.join(' ')}>    Learn React      </p>
        <button 
        className= {btnClass}
        onClick={props.clicked}>
          Swtich Name</button></div>
    )
};


export default Cockpit;