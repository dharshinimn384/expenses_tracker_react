import React from 'react'

function Balance({ transactions }) {
  const amounts = transactions.map(transaction => transaction.amount);
  //amounts=[-20,300,-10,150] <-- after map function 

    const total = amounts.reduce((acc, item) => 
        (acc += item)
      , 0);
  //total=420 <-- after using reduce
  return (
      <>
          <h3>Balance</h3>
          <h1>${ total}</h1>
    </>
  )
}

export default Balance