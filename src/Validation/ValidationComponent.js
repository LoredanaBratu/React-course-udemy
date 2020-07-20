import React from "react";

class ValidationComponent extends React.Component {
  render() {
    const { textLength } = this.props;
    let validationLength = "text too short";
    if (textLength > 5) {
      validationLength = "text long enough";
    }
    return (
      <div>
        <p>{validationLength}</p>
      </div>
    );
  }
}
export default ValidationComponent;
