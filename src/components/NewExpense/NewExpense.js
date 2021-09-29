import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseHandler = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random().toString(),
    };
    props.onSaveExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
