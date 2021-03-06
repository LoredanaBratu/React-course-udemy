import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import AuthContext from "../components/context/auth-context";

// useState  always returns an array with 2 elements (current state and a function taht allows to update the state )
//useState->array

class App extends Component {
  state = {
    persons: [
      { id: "0", name: "Maximilian", age: 30, hobby: "football" },
      { id: "1", name: "Manu", age: 20, hobby: "tennis" },
    ],

    showPersons: true,
    inputValue: "",
    showCockpit: true,
    changeCounter: 0,
    isAuthenticated: false,
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

    this.setState((prevState) => ({
      persons,
      changeCounter: prevState.changeCounter + 1,
    }));
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

  loginHandler = () => {
    this.setState({
      isAuthenticated: true,
    });
  };

  render() {
    const { persons, showPersons, showCockpit, isAuthenticated } = this.state;
    const { bigTitle } = this.props;
    let personsItems = null;
    if (showPersons) {
      personsItems = (
        <Persons
          persons={persons}
          click={this.handleSwitchName}
          handleChange={this.handleInputChange}
          delete={this.deletePerson}
        />
      );
    }

    return (
      <div className={classes.App}>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider
          value={{ authenticated: isAuthenticated, login: this.loginHandler }}
        >
          <button onClick={this.loginHandler}>Log in</button>
          {showCockpit && (
            <Cockpit
              title={bigTitle}
              personsLength={persons.length}
              showPersons={showPersons}
              togglePersons={this.handleTogglePersons}
            />
          )}
          {personsItems}
        </AuthContext.Provider>
      </div>
    );
  }
}
export default App;
