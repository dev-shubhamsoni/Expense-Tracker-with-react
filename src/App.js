import Header from './components/header/header.component';
import Balance from './components/balance/balance.component';
import IncomeExpenses from './components/income Expense/income.expenses.component';
import TransactionList from './components/Transaction List/transaction.list.component';
import AddTransaction from './components/add transaction/add.transaction.component';

import { GlobalProvider } from './context/global/global.state';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />

      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList /> 
        <AddTransaction />
      </div>
      
    </GlobalProvider>
  );
}

export default App;
