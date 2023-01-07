import React, { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      errorInfo: null,
      hasError: false,
    };
  }

  static getDerivedstateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div className="modal">
          <h5>No repository selected!</h5>
          <div className="details-container">
            <p>Select a project, then reload page</p>
            <details style={{ whiteSpace: "pre-wrap", width: "270px" }}>
              {this.state.error && this.state.error.toString()}
              {/* <br />
            {this.state.errorInfo.componentStack} */}
            </details>
          </div>
          <Link to="/repositories" className="close-button">
            Leave
          </Link>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
