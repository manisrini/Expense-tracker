import Chart from '../Chart/Chart';


const ExpensesChart = (props) => {
    
    

    const chartData = [
        {value : 0,label : 'Jan' },
        {value : 0,label : 'Feb' },
        {value : 0,label : 'Mar' },
        {value : 0,label : 'Apr' },
        {value : 0,label : 'May' },
        {value : 0,label : 'Jun' },
        {value : 0,label : 'Jul' },
        {value : 0,label : 'Aug' },
        {value : 0,label : 'Sep' },
        {value : 0,label : 'Oct' },
        {value : 0,label : 'Nov' },
        {value : 0,label : 'Dec' }
    ]

    props.expenses.map(expense => {
        const expenseMonth = expense.date.getMonth();
        chartData[expenseMonth].value += expense.price; 
    })
    return <Chart dataPoints = {chartData}></Chart>

}

export default ExpensesChart;