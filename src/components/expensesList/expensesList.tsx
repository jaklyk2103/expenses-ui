import { Expense } from '../../services/types';
import ExpenseListElement from '../expenseListElement/expenseListElement';
import "./expensesList.css";

type ExpenseListProps = {
  expenses: Expense[];
}

const ExpensesList = ({ expenses }: ExpenseListProps) => {
  return (
    <div className="expenses-list-wrapper">
      <p>Expenses:</p>
      {expenses && expenses.sort((expenseA, expenseB) => expenseB.date.getTime() - expenseA.date.getTime()).map((expense) => {
        return <ExpenseListElement expense={expense} key={expense.id}></ExpenseListElement>
      })}
    </div>
  );
}

export default ExpensesList;