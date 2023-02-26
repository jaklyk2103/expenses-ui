import React from 'react';
import { Expense } from '../../services/types';
import "./expenseListElement.css";

type ExpenseListElementProps = {
  expense: Expense;
}

const ExpenseListElement = ({ expense }: ExpenseListElementProps) => {
  return (
    <div className="expense-list-element-wrapper">
      <p>{ expense.description }</p>
      <p className="expenses-list-element-value">{ expense.value }</p>
      <p>{ expense.currency }</p>
    </div>
  );
}

export default ExpenseListElement;