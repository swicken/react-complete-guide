import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const yearChangeHandler = (year) => {
    setFilteredYear(year);
  };
  let filteredExpenses = props.expenses
    .filter((expense) => expense.date.getFullYear().toString() === filteredYear);
   
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onYearChange={yearChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />

    </Card>
  );
};

export default Expenses;
