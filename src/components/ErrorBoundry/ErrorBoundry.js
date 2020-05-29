import React, { Component } from 'react';

class ErrorBaundry extends Component {
    state = {
        hasError: false,
        errorMessage: 'Opps. Fucked up. Error!'
    }

    compomnentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessage: error});
    }

    render() {
        if(this.state.hasError) {
        return <h1>{this.state.errorMessage}</h1>
    } else {
        return this.props.children;
    }
}}

export default ErrorBaundry;