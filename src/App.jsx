import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddTransaction from './Components/AddTransaction';
import './App.css';
import Balance from './Components/Balance';
import Header from './Components/Header';
import IncomeExp from './Components/IncomeExp';
import TransactionList from './Components/TransactionList';

function App() {
  const initialState = {
    transaction: [
      { id: 1, text: 'Flower', amount: -20 },
      { id: 2, text: 'Salary', amount: 300 },
      { id: 3, text: 'Book', amount: -10 },
      { id: 4, text: 'Camera', amount: 150 }
    ],
  };

  const [transactions, setTransactions] = useState(initialState.transaction);

  useEffect(() => {
    // Fetch initial data from the API
    axios.get('https://expenses-tracker-apis1.onrender.com/expenses')
      .then(response => {
        setTransactions(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
 

  function deleteTransaction(id) {
    const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
    setTransactions(updatedTransactions);
  }

  function addTransaction(text, amount) {
    // Add the new transaction locally
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount
    };
    setTransactions([...transactions, newTransaction]);

    // Add the new transaction to the API
    axios.post('https://expenses-tracker-apis1.onrender.com/expenses', {
      text,
      amount
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error adding transaction:', error);
    });
  }

  return (
    <>
      <Header />
      <Balance transactions={transactions} />
      <IncomeExp transactions={transactions} />
      <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
      <AddTransaction addTransaction={addTransaction} />
    </>
  );
}

export default App;
