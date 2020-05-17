import React, { Component } from 'react';

class ErrorBoundry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    	this.setState({ hasError: true})
    // logErrorToMyService(error, errorInfo);
  	}

	render() {
		if (this.state.hasError) {
			//render any custom fallback UI
			return <h1> Something Went Wrong.</h1>
		}

		return.this.props.children;
	}
}

export default ErrorBoundry;

//https://reactjs.org/docs/error-boundaries.html