import React, { useEffect, useState } from 'react';
import { Expense } from '../services/types';
import { ExpensesService } from '../services/expensesService';
import ExpenseListElement from './ExpenseListElement';

const ExpensesList = () => {
  const expensesService = new ExpensesService();
  
  const [ expenses, setExpenses ] = useState([] as Expense[]);

  useEffect(() => {
    expensesService.getAllExpensesForUser({ email: 'test@email.com' })
      .then((expenses) => {
        setExpenses(expenses);
      })
  }, []);
  return (
    <div>
      <p>Expenses:</p>
      {expenses.map((expense) => {
        return <ExpenseListElement expense={expense}></ExpenseListElement>
      })}
    </div>
  );
}

export default ExpensesList;