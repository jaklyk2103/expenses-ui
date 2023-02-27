import React, { useState, useEffect } from 'react';
import ExpensesList from '../../components/expensesList/expensesList';
import { Expense } from '../../services/types';
import { ExpensesService } from '../../services/expensesService';
import NavigationBar from '../../components/navigationBar/navigationBar';
import { ApiClient } from '../../shared/apiClient/apiClient';

const ExpensesListPage = () => {
  const [ expenses, setExpenses ] = useState([] as Expense[]);

  useEffect(() => {
    const apiClient = new ApiClient();
    const expensesService = new ExpensesService(apiClient);
    const userEmail = window.localStorage.getItem('userEmail') as string;
    expensesService.getAllExpensesForUser({ email: userEmail })
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
