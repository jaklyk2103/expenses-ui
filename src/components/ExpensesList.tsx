import { Expense } from '../services/types';
import ExpenseListElement from './ExpenseListElement';

type ExpenseListProps = {
  expenses: Expense[];
}

const ExpensesList = ({ expenses }: ExpenseListProps) => {
  return (
    <div>
      <p>Expenses:</p>
      {expenses.map((expense) => {
        return <ExpenseListElement expense={expense} key={expense.id}></ExpenseListElement>
      })}
    </div>
  );
}

export default ExpensesList;