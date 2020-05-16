import React from "react";

class ValidationComponent extends React.Component {
  state = {
    message: "",
  };

  render() {
    const { length, message } = this.props;
    return (
      <div>
        <p>New length is: {length}</p>
        <p>{message}</p>
      </div>
    );
  }
}
export default ValidationComponent;
