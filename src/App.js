import React, { useState, Component } from "react";
import "./App.css";
import Person from "./Person/Person";

// useState  always returns an array with 2 elements (current state and a function taht allows to update the state )
//useState->array

class App extends Component {
  state = {
    persons: [
      { name: "Maximilian", age: 30 },
      { name: "Manu", age: 20 },
    ],
    showPersons: true,
  };

  handleSwitchName = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 20 },
        { name: "Thomas", age: 30 },
      ],
    });
  };

  handleInputChange = (event) => {
    this.setState({
      persons: [
        { name: "Max22", age: 20 },
        { name: event.target.value, age: 30 },
      ],
    });
  };

  handleTogglePersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
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
          <Person
            name={persons[0].name}
            age={persons[0].age}
            click={this.handleSwitchName}
            handleChange={this.handleInputChange}
          />
          <Person
            name={persons[1].name}
            age={persons[1].age}
            click={this.handleSwitchName.bind(this, "Paul")}
          >
            My bobby: football
          </Person>
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
        {/* {showPersons ? (
          <div>
            <Person
              name={persons[0].name}
              age={persons[0].age}
              click={this.handleSwitchName}
              handleChange={this.handleInputChange}
            />
            <Person
              name={persons[1].name}
              age={persons[1].age}
              click={this.handleSwitchName.bind(this, "Paul")}
            >
              My bobby: football
            </Person>
          </div>
        ) : null} */}
      </div>
    );
  }
}
export default App;
