import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  const togglePersonsBtnRef = useRef(null);
  useEffect(() => {
    // useEffect - hook for Lifecycle methods - combines componentDidMount() && componentDidUpdate()

    togglePersonsBtnRef.current.click();
    const timer = setTimeout(() => {
      // alert("Rendered");
    }, 1000);

    return () => {
      clearTimeout(timer);
      console.log("clean up ");
    }; // this return is similar to componentWillUnmount()
  }, [props.persons]); // control useEffect to be called only once,
  //only wehen persons are changed -> in genreal it can be controlled based on one ar multiples dependencies
  // if the array is empty, the useEff method is called only one time, when the component is first rendered

  const { personsLength, showPersons, title } = props;
  const assignedClasses = [];
  let btnClass = [classes.Button];

  if (personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (personsLength <= 1) {
    assignedClasses.push(classes.red, classes.bold);
  }

  if (showPersons) {
    btnClass.push(classes.Red);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{title}</h1>

      <button
        ref={togglePersonsBtnRef}
        onClick={props.togglePersons}
        className={btnClass.join(" ")}
      >
        Toggle Persons
      </button>
      <p className={assignedClasses.join(" ")}>This really works!</p>
    </div>
  );
};

export default React.memo(cockpit); //rerender only when props are changed (personsLength)
