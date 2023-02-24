import React, { useState, useEffect } from 'react';
import ExpensesList from '../../components/expensesList/expensesList';
import { Expense } from '../../services/types';
import { ExpensesService } from '../../services/expensesService';
import NavigationBar from '../../components/navigationBar/navigationBar';

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
      <NavigationBar pageTitle='Expenses' rightNavigationBarItem={{ to:'addExpense', children:'Add Expense' }} ></NavigationBar>
      <ExpensesList expenses={expenses}/>
    </>
  );
}

export default ExpensesListPage;
