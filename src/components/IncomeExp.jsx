import React from "react";

function IncomeExp({ transactions }) {
  const amounts = transactions.map(transaction => transaction.amount);
  //amounts=[-20,300,-10,150] <-- after map function


  const income = amounts
    .filter(amount => amount > 0)
    .reduce((acc, amount) => acc += amount, 0)
    .toFixed(2);
  // income=450 <-- after using filter and reduce functions
  
    const expense = (amounts
    .filter(amount => amount < 0)
    .reduce((acc, amount) => acc += amount, 0)*-1)
    .toFixed(2);
  //expense=30 <-- after using filter and reduce functions
  return (
    <div class="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" class="money plus">
          +${ income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" class="money minus">
          -${ expense}
        </p>
      </div>
    </div>
  );
}

export default IncomeExp;