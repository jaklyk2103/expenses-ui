import React from 'react';
import { Expense } from '../../services/types';
import "./ExpenseListElement.css";

type ExpenseListElementProps = {
  expense: Expense;
}

const ExpenseListElement = ({ expense }: ExpenseListElementProps) => {
  return (
    <div className="expense-list-element-wrapper">
      <p>{ expense.description }</p>
      <p>{ expense.value }</p>
      <p>{ expense.currency }</p>
    </div>
  );
}

export default ExpenseListElement;