import React from "react";

class CharComponent extends React.Component {
  render() {
    const { character } = this.props;
    return (
      <div
        className="wrapper-char-compoenent"
        style={{
          display: "inline-block",
          padding: "16px",
          textAlign: "center",
          margin: "16px",
          border: "1px solid black",
        }}
        onClick={() => this.props.remove()}
      >
        <p>{character}</p>
      </div>
    );
  }
}
export default CharComponent;
