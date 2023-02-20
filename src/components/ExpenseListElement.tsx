import React from 'react';
import { Expense } from '../services/types';

type ExpenseListElementProps = {
  expense: Expense
}

const ExpenseListElement = ({ expense }: ExpenseListElementProps) => {
  return (
    <div>
      <p>Description: { expense.description }</p>
      <p>Value: { expense.value }</p>
      <p>Currency: { expense.currency }</p>
    </div>
  );
}

export default ExpenseListElement;