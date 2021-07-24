import "./ExpenseList.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import Conditional from "./Conditional";
import ExpenseChart from "./ExpensesChart"
import ExpensesChart from "./ExpensesChart";
const ExpenseList = (props) => {
  const [selectDate, setselectDate] = useState("2020");

  const selectInputHandler = (enteredSelectInput) => {
    setselectDate(enteredSelectInput);
  };

  const filteredExpenses = props.expenseList.filter(
    (expense) => expense.date.getFullYear().toString() === selectDate
  );

  return (
    <div>
      <Card className="expense-list">
        <ExpenseFilter selected={selectDate} onSelect={selectInputHandler} />
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <Conditional filterexp = {filteredExpenses}></Conditional>
       
      </Card>
    </div>
  );
};

export default ExpenseList;
