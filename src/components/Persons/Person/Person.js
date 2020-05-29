import React, { Component } from "react"
import classes from "./Person.module.css"
import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Auxiliary'
import PropTypes from 'prop-types'
import AuthContext from '../../../context/auth-context'

class Person extends Component {

    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef()
    }

    static contextType = AuthContext;
    //Best what to use Context for class modules. Can be acces thru this.context

    componentDidMount() {
        // this.inputElement.focus()
        this.inputElementRef.current.focus()
        console.log(this.context.auth)
    }


    render() {
    console.log('[Person.js] rendering...')
    return <Aux>

    {this.context.auth ? <p>Authenticated!</p> : <p>Please log in!</p> }

    <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
    <p >{this.props.children}</p>
    <input
    // ref={(inputEl) => {this.inputElement = inputEl}}  <= older approach before 16.2
    ref= {this.inputElementRef}
    type="text" 
    onChange = {this.props.changed} 
    value={this.props.name}/>

    </Aux>
    
}


}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};
// PropTypes are for validation props. Need too be imported first thru CLI.
export default withClass(Person, classes.Person);