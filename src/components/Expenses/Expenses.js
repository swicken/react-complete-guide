import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const yearChangeHandler = (year) => {
    setFilteredYear(filteredYear);
  };
  let expenseList = props.expenses.map((expense) => (
    <ExpenseItem
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
  return (
    <div>
      <ExpensesFilter
        selected={filteredYear}
        onYearChange={yearChangeHandler}
      />
      <Card className="expenses">{expenseList}</Card>
    </div>
  );
};

export default Expenses;
