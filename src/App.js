import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

// useState  always returns an array with 2 elements (current state and a function taht allows to update the state )
//useState->array

// class App extends Component {
//   state = {
//     persons: [
//       { name: "Maximilian", age: 30 },
//       { name: "Manu", age: 20 }
//     ]
//   };

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Maximilian", age: 30 },
      { name: "Manu", age: 20 }
    ]
  });

  const handleSwitchName = () => {
    // this.setState({
    setPersonsState({
      persons: [
        { name: "Emilian", age: 20 },
        { name: "Thomas", age: 30 }
      ]
    });
  };

  // render() {
  return (
    <div className="App">
      <button onClick={handleSwitchName}>Switch infos</button>
      <h1>I'm a react App</h1>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My bobby: football
      </Person>
    </div>
  );
  // return React.createElemen(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", "Im a new element")
  // ); //da error
};
// }

// export default App;
export default app;
