import { BrowserHistory } from 'history';
import React from 'react';
import { BrowserRouterProps, Route, Router, Routes } from 'react-router-dom';
import AddExpensePage from '../../pages/addExpensePage/addExpensePage';
import ExpensesListPage from '../../pages/expensesListPage/expensesListPage';
import LoginPage from '../../pages/loginPage/loginPage';

interface CustomRouterProps extends BrowserRouterProps {
  history: BrowserHistory;
}

const CustomRouter = ({ basename, history }: CustomRouterProps) => {
  const [state, setState] = React.useState({
    action: history.action,
    location: history.location,
  });

  React.useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      <Routes>
        <Route path='/' element={<ExpensesListPage />} />
        <Route path='/addExpense' element={<AddExpensePage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default CustomRouter;