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

  // const app = (props) => {
  //   const [personsState, setPersonsState] = useState({
  //     persons: [
  //       { name: "Maximilian", age: 30 },
  //       { name: "Manu", age: 20 },
  //     ],
  //   });

  // const handleSwitchName = () => {
  //   // this.setState({
  //   setPersonsState({
  //     persons: [
  //       { name: "Emilian", age: 20 },
  //       { name: "Thomas", age: 30 }
  //     ]
  //   });
  // };
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
    this.setState({
      showPersons: !this.state.showPersons,
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
    return (
      <div className="App">
        <button style={style} onClick={this.handleTogglePersons}>
          Hide content
        </button>
        <h1>I'm a react App</h1>
        {this.state.showPersons ? (
          <div>
            <Person
              // name={this.state.persons[0].name}
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              click={this.handleSwitchName}
              handleChange={this.handleInputChange}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.handleSwitchName.bind(this, "Paul")}
            >
              My bobby: football
            </Person>
          </div>
        ) : null}
      </div>
    );
    // return React.createElemen(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", "Im a new element")
    // ); //da error
  }
}
export default App;
//export default app;
