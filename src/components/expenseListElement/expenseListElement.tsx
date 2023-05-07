import React from 'react';
import { Expense } from '../../services/types';
import "./expenseListElement.css";
import { useNavigate } from 'react-router-dom';

type ExpenseListElementProps = {
  expense: Expense;
}

const ExpenseListElement = ({ expense }: ExpenseListElementProps) => {
  const navigate = useNavigate();
  const handleExpenseListElementClick = () => {
    navigate('expense', { 
      state: {
        expense
      }
    })
  }

  return (
    <div className="expense-list-element-wrapper" onClick={handleExpenseListElementClick}>
      <p className='expense-list-element-date'>{ expense.date.toDateString() }</p>
      <p className='expense-list-element-description'>{ expense.description }</p>
      <p className="expenses-list-element-value">{ expense.value }</p>
      <p className='expense-list-element-currency'>{ expense.currency }</p>
    </div>
  );
}

export default ExpenseListElement;