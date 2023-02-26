import { ChangeEvent, MouseEvent, useState } from "react";
import { ExpensesService } from "../../services/expensesService";
import "./addExpenseForm.css";

export default function AddExpenseForm() {
  const [description, setDescription] = useState('');
  const [currency, setCurrency] = useState('PLN');
  const [value, setValue] = useState(0);

  const handleAddExpenseButtonClick = async (event: MouseEvent) => {
    event.preventDefault();

    const expenseService = new ExpensesService();
    await expenseService.addExpense({
      email: 'test@email.com',
      expense: {
        currency,
        description,
        value,
        expenseOwnerEmail: 'test@email.com',
      }
    })
  };

  const handleDescriptionInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleValueInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  const handleCurrencyInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  }

  return(
    <form className="add-expense-form-wrapper">
      <input className='add-expense-form-input' type="text" onChange={handleDescriptionInputChange} placeholder="description" />
      <input className='add-expense-form-input' type="number" min="1" step="any" onChange={handleValueInputChange} placeholder="value" />
      <input className='add-expense-form-input' type="text" onChange={handleCurrencyInputChange} placeholder="currency" />
      <button className='add-expense-form-button' onClick={handleAddExpenseButtonClick}>Add</button>
    </form>
  );
}