
import { useContext } from "react";
import { GlobalContext } from "../../context/global/global.state";
import Transaction from "../transactions/transactions.component";

const TransactionList = () => {

    const { transactions } = useContext(GlobalContext);


    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map(transaction => (
                    <Transaction transactions = {transaction} key = {transaction.id}/>
                ))}

            </ul>
        </>
    )
}

export default TransactionList;