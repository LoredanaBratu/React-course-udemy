import React, { Component } from "react";
import "./Person.css";

class Person extends Component {
  render() {
    // const rnd = Math.random();

    // if (rnd > 0.7) {
    //   throw new Error("Something went wrong!");
    // }
    return (
      <div className="person-wrapper">
        {/* <p onClick={() => props.click("Jhon")}>I'm the Person component</p> */}
        <p onClick={this.props.delete}>
          I'm the Person component and my name is {this.props.name} and I'm{" "}
          {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.handleChange}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
