import React, { useEffect, useRef, useContext } from 'react'
import classes from './Cockpit.module.css'
import AuthContext from '../../context/auth-context'


const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    const authContext = useContext(AuthContext)
    
    console.log(authContext.auth)

useEffect(() => {
    console.log('[Cockpit.js] useEffect component will mount')
    // send HTTP request...
    // const timer = setTimeout(() => {
    //     alert('saved data to cloud')
    // } ,1000);
    toggleBtnRef.current.click()
    return() => {
        // clearTimeout(timer)
        console.log('[Cockpit.js] Use Effect Component will unmount. CLEANUP!')
    }
}, []);
//When passed empty only renders at onload. Can control when something executes like componentDidMount.
//useEffect() <- can make more than one
// useEffect(() => {
    
//     console.log('[Cockpit.js] 2nd useEffect')
//     return () => {
//         console.log('Cockpit.js cleanup after 2nd useEffect'
//         )
//     }
// }) 


    let someClasses = [];
    let btnClass = classes.button;

    if (props.showPersons) {
        btnClass = classes.button.Red; /// problem with changing this class
    }
    if (props.personsLength <= 2) {
      someClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
      someClasses.push(classes.bold);
    }


    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
        <p className={someClasses.join(' ')}>    Learn React      </p>
        <button ref={toggleBtnRef}
        className= {btnClass}
        onClick={props.clicked}>
          Swtich Name</button>
 <button onClick={authContext.login}>
              Log in</button>
          </div>
    )
};


export default React.memo(Cockpit);