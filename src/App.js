import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I'm a react App</h1>
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
