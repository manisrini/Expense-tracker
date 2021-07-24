import "./NewExpense.css";
import "./ExpenseForm";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setisEditing] = useState(false);
  const dataSaveHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
    };

    props.onAddExpense(expenseData);
  };

  const renderForm = () => {
    setisEditing(true);
  };

  const setFalseForm = () => {
      setisEditing(false);
  }

  return (
    <div className="new-expense">
      {isEditing === false ? (
        <button onClick={renderForm}>Add expense</button>
      ) : (
        <ExpenseForm onCancel={setFalseForm} onDataSaveHandler={dataSaveHandler} />
      )}
    </div>
  );
};

export default NewExpense;
