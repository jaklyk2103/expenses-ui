import AddExpenseForm from '../../components/addExpenseForm/addExpenseForm';
import NavigationBar from '../../components/navigationBar/navigationBar';

const AddExpensePage = () => {
  return (
    <>
      <NavigationBar pageTitle='Add Expense' leftNavigationBarItem={{ to: '/', children: 'Expenses' }} />
      <AddExpenseForm />
    </>
  );
}

export default AddExpensePage;
