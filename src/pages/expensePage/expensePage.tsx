import { useLocation } from 'react-router-dom';
import EditExpenseForm from '../../components/editExpenseForm/editExpenseForm';
import NavigationBar from '../../components/navigationBar/navigationBar';
import { Expense } from '../../services/types';

type ExpensePageProps = {
  expense: Expense;
}

export default function ExpensePage() {
  const location = useLocation();
  const props: ExpensePageProps = location.state;

  return (
    <>
      <NavigationBar pageTitle='Expense' leftNavigationBarItem={{ to: '/', children: 'Expenses' }} />
      <EditExpenseForm expense={props.expense} />
    </>
  );
}