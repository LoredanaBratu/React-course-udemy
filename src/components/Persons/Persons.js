import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.persons !== this.props.persons) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    const { persons } = this.props;

    return persons.map((person, index) => (
      <Person
        key={person.id}
        age={person.age}
        name={person.name}
        click={this.props.click}
        handleChange={(e) => this.props.handleChange(e, person.id)}
        delete={() => this.props.delete(index)}
      />
    ));
  }
}
export default Persons;
