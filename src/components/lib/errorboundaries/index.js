import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // You can render any custom fallback UI
      return <p className="text-red-500 text-center mt-4">{this.state.error && this.state.error.toString()}</p>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
