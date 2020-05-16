import React, { Component } from "react";

class CharComponent extends Component {
  render() {
    const style = {
      display: "inline-block",
      padding: "16px",
      textAlign: "center",
      margin: "16px",
      border: "1px solid black",
    };
    const { letter, click } = this.props;
    return (
      <div className="wrapper" style={style} onClick={this.props.click}>
        {/* {letter} */}
        text
      </div>
    );
  }
}
export default CharComponent;
