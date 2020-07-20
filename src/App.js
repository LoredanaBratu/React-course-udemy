import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import ValidationComponent from "./Validation/ValidationComponent";
import CharComponent from "./Validation/CharComponent";
import Radium from "radium";

// useState  always returns an array with 2 elements (current state and a function taht allows to update the state )
//useState->array

class App extends Component {
  state = {
    persons: [
      { id: "0", name: "Maximilian", age: 30, hobby: "football" },
      { id: "1", name: "Manu", age: 20, hobby: "tennis" },
    ],
    form: {
      typeOfArea: [
        {
          type: "craft",
          description: "",
          actionTypes: [{ action: "", timing: "", measure: "" }],
        },
        {
          type: "educate/inspire",
          description: "",
          actionTypes: [{ action: "", timing: "", measure: "" }],
        },
        {
          type: "commercial",
          description: "",
          actionTypes: [{ action: "", timing: "", measure: "" }],
        },
        {
          type: "management",
          description: "",
          actionTypes: [{ action: "", timing: "", measure: "" }],
        },
        {
          type: "digital",
          description: "",
          actionTypes: [{ action: "", timing: "", measure: "" }],
        },
        {
          type: "other",
          description: "",
          actionTypes: [{ action: "", timing: "", measure: "" }],
        },
      ],
    },
    checks: [
      { id: 0, value: "craft", isChecked: true },
      { id: 1, value: "educate", isChecked: false },
      { id: 2, value: "comercial", isChecked: false },
    ],

    showPersons: true,
    inputValue: "",
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

  handleCheckLength = ({ target }) => {
    this.setState({
      inputValue: target.value,
    });
  };

  handleRemoveCharComponent = (index) => {
    const text = this.state.inputValue.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    this.setState({ inputValue: updatedText });
  };

  render() {
    console.log("test");
    const style = {
      background: "green",
      padding: "8px",
      cursor: "pointer",
      background: "green",
      margin: "10px auto",
      border: "1px solid black",
      color: "white",
      ":hover": {
        //due to Radium we can set such proporties in inline style !!!!
        background: "lightgreen",
        color: "black",
      },
    };

    const { persons, showPersons, inputValue } = this.state;

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
      style.background = "red";
      style[":hover"] = {
        //si aici !!! tot cu Radium
        background: "salmon",
        color: "black",
      };
    }

    const charList = inputValue.split("").map((character, index) => {
      return (
        <div>
          <CharComponent
            character={character}
            key={index}
            remove={() => this.handleRemoveCharComponent(index)}
          />
        </div>
      );
    });

    const classes = [];
    if (persons.length <= 2) {
      classes.push("red");
    }
    if (persons.length <= 1) {
      classes.push("red", "bold");
    }

    const letter = this.state.checks.map((character, index) => {
      const NO_ROWS = this.state.form.typeOfArea[index].actionTypes;
      if (character.isChecked) {
        return (
          <div>
            <input type="text"></input>
            <p>{character.value}</p>
            {NO_ROWS.map((rows) => (
              <CharComponent
                form={this.state.form}
                // letter={character}
                key={index}
                click={() => this.deleteCharacter(index)}
              />
            ))}
            <div onClick={() => this.handleAddFields(character.value)}>+</div>
          </div>
        );
      }
    });

    return (
      <div className="App">
        <h1>I'm a react App</h1>
        <button style={style} onClick={this.handleTogglePersons}>
          Toggle Persons
        </button>
        <h1>I'm a react App</h1>
        <p className={classes.join(" ")}>This really works!</p>
        {personsItems}

        <input
          type="text"
          value={inputValue}
          onChange={(event) => this.handleCheckLength(event)}
        />
        <p>{inputValue.length}</p>
        <ValidationComponent textLength={inputValue.length} />
        {charList}
      </div>
    );
  }
}
export default Radium(App);
