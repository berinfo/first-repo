import { useState, useRef, useEffect } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [validName, setValidName] = useState(false);
  const [enteredNameTouched, setEnteredNameToucher] = useState(false);

  useEffect(() => {
    if (validName) {
      console.log("name input is valid");
    }
  }, [validName]);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameToucher(true);
    if (enteredName.trim() === "") {
      setValidName(false);
      return;
    }
    setValidName(true);
    const enteredValue = nameInputRef.current.value;

    // inameInputRef.current.value = ''
    setEnteredName("");
    // using ref to clear input after submission is not recommended, because of manipulating dom
  };
  const nameInputIsInvalid = !validName && enteredNameTouched;
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
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
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
