import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Transaction = ({transaction}) => {
  const sign = transaction.amount < 0 ? '-' : '+';
  const border = transaction.amount < 0 ? 'minus' : 'plus';

  const {deleteTransaction} = useContext(GlobalContext);
  
  return (
    <li className={border}>
      {transaction.text}<span>{sign}${Math.abs(transaction.amount)}</span>
      <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li>
  )
}

export default Transaction
