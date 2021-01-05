import React, { Component } from 'react';

export default class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }
    componentDidCatch(error, info) {
        console.log(error, info);
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oooops. That is not good.</h1>   
        } else {
            return this.props.children;
        }
    }
}