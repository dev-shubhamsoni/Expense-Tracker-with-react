import { useState } from "react";

const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    return (
        <>

            <h3>Add New Transaction</h3>
            <form id="form">

                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} type="text" id="text" placeholder="Enter text..." />
                </div>

                <div className="form-control">
                    <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
                    <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" id="amount" placeholder="Enter Amount..." />
                    
                </div>

                <button className="btn"> Add Transaction</button>

            </form>

        </>
    )
}

export default AddTransaction;