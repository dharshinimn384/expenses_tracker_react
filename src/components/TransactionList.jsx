import React from "react";

function TransactionList({ transactions, deleteTransaction }) {
  return (
    <>
      <h3>History</h3>
      <ul id="list" class="list">
        {/* Mapping the state and getting the the text and amount form the state and placing it inside map function */}
        {/* Disclaimer: Keep the eye on where Round brakcets '()' and {} 'Curley brackets are used inside map fucntion' */}
        {transactions.map((transaction) => (
          <li className={transaction.amount < 0 ? "minus" : "plus"}>
            {transaction.text} <span>${transaction.amount}</span>
            <button
              class="delete-btn"
              onClick={() => deleteTransaction(transaction.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TransactionList;