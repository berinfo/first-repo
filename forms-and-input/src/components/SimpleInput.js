import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [validName, setValidName] = useState(true);
  const nameInputRef = useRef();

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim() === "") {
      setValidName(false);
      return;
    }
    setValidName(true);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredName);
    console.log(enteredValue);
    // inameInputRef.current.value = ''
    setEnteredName("");
    // using ref to clear input after submission is not recommended, because of manipulating dom
  };
  const nameInputClasses = validName ? "form-control" : "form-control invalid";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
          ref={nameInputRef}
        />
        {!validName && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
