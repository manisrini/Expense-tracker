import './ExpenseDate.css'



function ExpenseDate(props){

    const month = props.date.toLocaleString('en-IN',{month : 'short'});
    const day   = props.date.toLocaleString('en-IN',{day : '2-digit'});
    const year  = props.date.getFullYear();

    return(

    <div class="expense-date">
    
        <div>{day} {month}</div>   
        
        <div>{year}</div>

    </div>
    );
}

export default ExpenseDate;