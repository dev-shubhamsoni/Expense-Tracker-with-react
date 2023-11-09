import Header from './components/header/header.component';
import Balance from './components/balance/balance.component';
import IncomeExpenses from './components/income Expense/income.expenses.component';
import TransactionList from './components/Transaction List/transaction.list.component';
import AddTransaction from './components/add transaction/add.transaction.component';
import './App.css';

function App() {
  return (
    <div>
      <Header />

      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList /> 
        <AddTransaction />
      </div>
      
    </div>
  );
}

export default App;
