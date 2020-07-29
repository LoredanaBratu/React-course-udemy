import React from "react";

class ErrorBoundary extends React.Component {
  state = {
    hasErr: false,
    errMsg: "",
  };

  componentDidCatch = (error, info) => {
    this.setState({
      hasErr: true,
      errMsg: error,
    });
  };
  render() {
    const { hasErr, errMsg } = this.state;
    if (hasErr) {
      return <h1>{errMsg}</h1>;
    } else {
      return this.props.children;
    }
  }
}
export default ErrorBoundary;
