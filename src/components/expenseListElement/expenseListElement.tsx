import React from 'react';
import { Expense } from '../../services/types';
import "./expenseListElement.css";

type ExpenseListElementProps = {
  expense: Expense;
}

const ExpenseListElement = ({ expense }: ExpenseListElementProps) => {
  return (
    <div className="expense-list-element-wrapper">
      <p className='expense-list-element-date'>{ expense.date.toDateString() }</p>
      <p className='expense-list-element-description'>{ expense.description }</p>
      <p className="expenses-list-element-value">{ expense.value }</p>
      <p className='expense-list-element-currency'>{ expense.currency }</p>
    </div>
  );
}

export default ExpenseListElement;