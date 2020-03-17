import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    // this will get called when a component wrapped by this component generates an error
    componentDidCatch = (error, info) => {
        this.setState({
            hasError: true,
            errorMessage: error
        });
    }

    render() {
        // when accessing state or props inside a class we need to use this
        if (this.state.hasError) {
            return (
                <h1>{this.state.errorMessage}</h1>
            );
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;