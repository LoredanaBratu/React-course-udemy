import React, { useState, Component } from "react";
import "./App.css";
import Person from "./Person/Person";

// useState  always returns an array with 2 elements (current state and a function taht allows to update the state )
//useState->array

class App extends Component {
  state = {
    persons: [
      { id: "0", name: "Maximilian", age: 30, hobby: "football" },
      { id: "1", name: "Manu", age: 20, hobby: "tennis" },
    ],
    showPersons: true,
  };

  handleSwitchName = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 20, hobby: "football" },
        { name: "Thomas", age: 30, hobby: "football" },
      ],
    });
  };

  handleInputChange = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons,
    });
  };

  handleTogglePersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  };

  deletePerson = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  render() {
    const style = {
      padding: "8px",
      cursor: "pointer",
      margin: "10px auto",
      background: "white",
      border: "1px solid black",
    };

    const { persons, showPersons } = this.state;

    let personsItems = null;
    if (showPersons) {
      personsItems = (
        <div>
          {persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                age={person.age}
                name={person.name}
                click={this.handleSwitchName}
                handleChange={(event) =>
                  this.handleInputChange(event, person.id)
                }
                delete={() => this.deletePerson(index)}
              >
                My bobby:{person.hobby}
              </Person>
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <button style={style} onClick={this.handleTogglePersons}>
          Hide content
        </button>
        <h1>I'm a react App</h1>
        {personsItems}
      </div>
    );
  }
}
export default App;
