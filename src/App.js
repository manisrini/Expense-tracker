import ExpenseList from './components/Expenses/ExpenseList'
import NewExpense from './components/NewExpense/NewExpense'
import {useState} from "react";

const App = () => {

  const expenseList =[
    {
      name : "Royal enfield",
      price : 500,
      date : new Date(2021, 5, 14)
    },
    {
      name : "Laptop",
      price : 400,
      date : new Date(2021, 3, 10)
    },
    {
      name : "Car",
      price : 5000,
      date : new Date(2021, 6, 14)
    }

  ] ;

  const [expenses,setexpenses] = useState(expenseList); 


  const addExpenseHandler = userEnteredData => {
   setexpenses(prevState => {
    return [userEnteredData , ...prevState] 
   });
  }

  return (
    <div className="App">
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <ExpenseList expenseList = {expenses}></ExpenseList>    

      
    </div>
  );
}

export default App;
