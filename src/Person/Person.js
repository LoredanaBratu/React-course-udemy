import React from "react";
import "./Person.css";

const Person = (props) => {
  return (
    <div className="person-wrapper">
      <p onClick={() => props.click("Jhon")}>I'm the Person component</p>
      <p onClick={props.delete}>
        I'm the Person component and my name is {props.name} and I'm {props.age}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.handleChange} value={props.name} />
    </div>
  );
};

export default Person;
