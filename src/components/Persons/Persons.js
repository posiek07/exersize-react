import React, { Component } from 'react'
import Person from './Person/Person'

class Persons extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log ('persons drived state from props')
    //     return state
    // }


    shouldComponentUpdate(nextProps, nextState) {
        console.log('Persons.js should component update')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Persons Get snapshot before update')
        return {message: 'Snapshot!'}
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('persons component did update')
        console.log(snapshot)
    }

    componentWillUnmount() {
        console.log('Persons.js componentWillUnmount')
    }

    render() {
    console.log('[Persons.js] rendering...')
    return this.props.persons.map((person, index) => {
        return <Person 
        name={person.name} 
        age={person.age}
        key={person.id}
        click={()=>this.props.clicked(index)}
        changed={(event) => this.props.changed(event, person.id)} />
      }
)}}

export default Persons;