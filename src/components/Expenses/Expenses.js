import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  let expenseList = props.expenses.map((expense) => (
    <ExpenseItem
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
  return <Card className="expenses">{expenseList}</Card>;
}

export default Expenses;
