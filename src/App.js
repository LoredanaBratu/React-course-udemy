import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./ValidationComponent/CharComponent";

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
    valueLength: "",
    message: "",
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

  detectLength = ({ target }) => {
    this.setState({ inputValue: target.value });

    const valueLength = target.value.length;
    let message;
    this.setState({
      valueLength,
    });
    if (valueLength <= 5) {
      message = "Text too short";
    } else {
      message = "Text long enough";
    }
    this.setState({ message });
  };

  deleteCharacter = (index) => {
    const text = this.state.inputValue.split(""); //now it is an array of characters(strings)
    text.splice(index, 1); //delete
    const updatedText = text.join(""); //remade- tranform array of strings into a string
    this.setState({ inputValue: updatedText });
  };

  handleCheck = (index, event) => {
    const { checkboxItems } = this.state.form;

    const currentValue = checkboxItems[index].isChecked;
    const copyedEl = [...checkboxItems];
    copyedEl[index].isChecked = !currentValue;

    this.setState((prev) => ({
      liteCoachForm: {
        ...prev.form,
        checkboxItems: copyedEl,
      },
    }));

    // const checkboxIndex = this.state.checks.findIndex((e) => {
    //   return e.id === index;
    // });

    // const checkbox = {
    //   ...this.state.checks[checkboxIndex],
    // };
    // checkbox.isChecked = event.target.checked;

    // const checks = [...this.state.checks];
    // checks[checkboxIndex] = checkbox;

    // this.setState({
    //   checks,
    // });
  };

  handleAddFields(type) {
    const { form } = this.state;
    const { typeOfArea } = form;

    Object.entries(typeOfArea).map((el) => {
      const currElement = el[1];
      if (currElement.type === type.toLowerCase()) {
        currElement.actionTypes.push({
          action: null,
          measure: null,
          timing: null,
        });
      }
    });
    this.setState({});
  }

  render() {
    const style = {
      color: "white",
      padding: "8px",
      cursor: "pointer",
      background: "green",
      margin: "10px auto",
      border: "1px solid black",
    };
    const { persons, showPersons, valueLength, message } = this.state;

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
        <div>{personsItems}</div>
        <input
          type="text"
          onChange={(event) => this.detectLength(event)}
          value={this.state.inputValue}
        />
        <div>
          {this.state.checks.map((check, index) => (
            <div>
              <input
                type="checkbox"
                checked={check.isChecked}
                onClick={(event) => this.handleCheck(index, event)}
              />
              {check.value}
            </div>
          ))}
        </div>
        {/* <p>Length is: {valueLength}</p> */}
        <ValidationComponent length={valueLength} message={message} />
        {letter}
      </div>
    );
  }
}
export default App;
