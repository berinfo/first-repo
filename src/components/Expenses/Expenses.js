import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

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
      <button onClick={() => changeStyle()}>Click</button>
    </Card>
  );
};

export default Expenses;
