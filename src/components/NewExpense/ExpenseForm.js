import {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setenteredTitle] = useState('');
    const [enteredAmount, setenteredAmount] = useState('');
    const [enteredDate, setenteredDate] = useState('');
    
    const titleChangeHandler = (event) => {
        setenteredTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
       setenteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setenteredDate(event.target.value)
    }

    const submitHandler = (event) => {

        event.preventDefault();

        const expenseData =  {
            name : enteredTitle,
            price : +enteredAmount,
            date  : new Date(enteredDate)
        }

        props.onDataSaveHandler(expenseData)

        setenteredTitle('');
        setenteredAmount('');
        setenteredDate('');


        
    }
    return(
     
        <form onSubmit={submitHandler}>
            <div className="new-expense-form">
                <div className="new-expense-form-element">
                    <label>Title</label>
                    <input type="text" required value={enteredTitle} onChange={titleChangeHandler}/>
                </div>

                <div className="new-expense-form-element">
                    <label>Amount</label>
                    <input type="number" required value={enteredAmount} onChange={amountChangeHandler} min='1' />

                </div>

                <div className="new-expense-form-element">
                    <label>Date</label>
                    <input type="date" required value={enteredDate} onChange={dateChangeHandler} min="2019-01-01" max="2023-01-01"/>    
                </div>    
                
            </div>

            <div className="btn">
                <button onClick={props.onCancel}>Cancel</button>
                <button>Add an Expense</button>
            </div>
        </form>
         )
}

export default ExpenseForm;