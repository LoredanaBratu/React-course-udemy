import React, { Component } from "react";
import classes from "./Cockpit.css";

class Cockpit extends Component {
  render() {
    const { persons, showPersons } = this.props;
    const assignedClasses = [];
    let btnClass = [classes.Button];

    if (persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (persons.length <= 1) {
      assignedClasses.push(classes.red, classes.bold);
    }

    if (showPersons) {
      btnClass.push(classes.Red);
    }

    return (
      <div className={classes.Cockpit}>
        <h1>I'm a react App</h1>

        <button
          onClick={this.props.togglePersons}
          className={btnClass.join(" ")}
        >
          Toggle Persons
        </button>
        <p className={assignedClasses.join(" ")}>This really works!</p>
      </div>
    );
  }
}
export default Cockpit;
