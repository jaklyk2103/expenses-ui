import React, { useState, useEffect } from 'react';
import ExpensesList from '../../components/expensesList/expensesList';
import { Expense } from '../../services/types';
import { ExpensesService } from '../../services/expensesService';

const ExpensesListPage = () => {
  const [ expenses, setExpenses ] = useState([] as Expense[]);

  useEffect(() => {
    const expensesService = new ExpensesService();
    expensesService.getAllExpensesForUser({ email: 'test@email.com' })
      .then((expenses) => {
        setExpenses(expenses);
      });
  }, []);

  return (
    <>
      <ExpensesList expenses={expenses}/>
    </>
  );
}

export default ExpensesListPage;
