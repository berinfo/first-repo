import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";

import styled from "styled-components";
import "./Expenses.css";

const Button = styled.button`
  width: 100%;
  font: inherit;
  padding: 0.5rem 1rem;
  border: 1px solid red;
  color: white;
  cursor: pointer;

  &:hover {
    background: grey;
    border-color: green;
  }

  @media (min-width: 768px) {
    width: auto;
  }
`;

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [isValid, setIsValid] = useState(true);
  const [input, setInput] = useState("");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  const changeStyle = () => {
    if (input.trim().length === 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
      <label className={`control ${!isValid ? "invalid" : ""}`}>
        Dinamic style
      </label>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <Button onClick={() => changeStyle()}>Click</Button>
    </Card>
  );
};

export default Expenses;
