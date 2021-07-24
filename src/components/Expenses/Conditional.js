import Expense from './Expense.js'
const Conditional = (props) => {

        if(props.filterexp.length === 0){
          return <h2>No expenses found</h2>
        }

  
       return(
           <div>
                {props.filterexp.length === 0 ? (
                   <p>No data found</p>
                 ) : (
                props.filterexp.map((expense) => (
                <Expense key={expense.name} ob={expense}></Expense>
                ))
                )}
           </div>
       ) 
    

}

export default Conditional;