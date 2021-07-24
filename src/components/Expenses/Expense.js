
import './Expense.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'

const Expense = (props)=> {


   

 

    return(
        <Card className="expense-item">
            <ExpenseDate date={props.ob.date}></ExpenseDate>
            <div className='expense-item-description'>
                <h2>{props.ob.name}</h2>
                <div className="expense-item-price">{props.ob.price}</div>
            </div>
            
        </Card>
    )
}

export default Expense; 
