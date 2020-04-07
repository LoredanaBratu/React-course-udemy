import React from "react";

const Person = props => {
  return (
    <div>
      <p>I'm the Person component</p>
      <p>
        I'm the Person component and my name is {props.name} and I'm {props.age}
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default Person;
