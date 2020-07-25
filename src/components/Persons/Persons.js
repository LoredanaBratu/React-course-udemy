import React from "react";
import Person from "./Person/Person";

const persons = (props) =>
  props.persons.map((person, index) => {
    return (
      <Person
        key={person.id}
        age={person.age}
        name={person.name}
        click={props.click}
        handleChange={(e) => props.handleChange(e, person.id)}
        delete={() => props.delete(index)}
      />
    );
  });
export default persons;
