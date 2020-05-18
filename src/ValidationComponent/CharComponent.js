import React, { Component } from "react";

class CharComponent extends Component {
  render() {
    const style = {
      width: "90%",
      display: "inline-block",
      padding: "16px",
      textAlign: "center",
      margin: "16px",
      border: "1px solid black",
    };
    const { letter, click, form } = this.props;
    const values = form.typeOfArea[0].actionTypes;
    return (
      <div className="wrapper" style={style} onClick={this.props.click}>
        {/* {letter} */}
        {values.map((el) => (
          <div>
            <input type="text" placeholder="enter here" />
            <input type="text" placeholder="enter here" />
          </div>
        ))}
      </div>
    );
  }
}
export default CharComponent;
