import React, { Component } from "react";
import "./Person.css";
import Auxiliary from "../../hoc/Auxiliary";
import AuthContext from "../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef(); //create ref with react in constructor
  }

  static contextType = AuthContext;
  componentDidMount() {
    this.inputElementRef.current.focus();
    // this.inputElement.focus(); //focus pe ultimul input

    console.log(this.context.authenticated, "context"); //use context props
  }
  render() {
    return (
      /* hoc used for wrapping */
      <Auxiliary>
        {/* <div className="person-wrapper"> */}
        {/* <p onClick={() => props.click("Jhon")}>I'm the Person component</p> */}
        <AuthContext.Consumer>
          {(context) =>
            context.authenticated ? (
              <p>Authenticated!</p>
            ) : (
              <p>Please, log in!</p>
            )
          }
        </AuthContext.Consumer>
        <p onClick={this.props.delete}>
          I'm the Person component and my name is {this.props.name} and I'm{" "}
          {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          ref={this.inputElementRef}
          // ref={(inputEl) => {
          //   this.inputElement = inputEl;
          // }} //craete pure js ref
          onChange={this.props.handleChange}
          value={this.props.name}
        />
        {/* </div> */}
      </Auxiliary>
    );
  }
}

export default Person;
