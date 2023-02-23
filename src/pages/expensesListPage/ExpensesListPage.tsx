import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ExpensesList from '../../components/expensesList/expensesList';
import { Expense } from '../../services/types';
import { ExpensesService } from '../../services/expensesService';
import SingleNavigationLink from '../../components/singleNavigationLink/singleNavigationLink';
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
      <SingleNavigationLink to="addExpense">Add Expense</SingleNavigationLink>
      <ExpensesList expenses={expenses}/>
    </>
  );
}

export default ExpensesListPage;
