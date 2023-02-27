import { ChangeEvent, MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ExpensesService } from "../../services/expensesService";
import { ApiClient } from "../../shared/apiClient/apiClient";
import SelectCurrencyFormField from "../selectCurrencyFormField/selectCurrencyFormField";
import "./addExpenseForm.css";

export default function AddExpenseForm() {
  const navigate = useNavigate();
  const [description, setDescription] = useState('');
  const [currency, setCurrency] = useState('PLN');
  const [value, setValue] = useState(0);

  const handleAddExpenseButtonClick = async (event: MouseEvent) => {
    event.preventDefault();

    const apiClient = new ApiClient();
    const expenseService = new ExpensesService(apiClient);
    const userEmail = window.localStorage.getItem('userEmail') as string;
    await expenseService.addExpense({
      email: userEmail,
      expense: {
        currency,
        description,
        value,
        expenseOwnerEmail: userEmail,
      }
    });
    navigate('/');
  };

  const handleDescriptionInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleValueInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return(
    <div className="add-expense-form-wrapper">
      <input className='add-expense-form-input' type="text" onChange={handleDescriptionInputChange} placeholder="description" />
      <input className='add-expense-form-input' type="number" min="1" step="any" onChange={handleValueInputChange} placeholder="value" />
      <SelectCurrencyFormField className='add-expense-form-input' setCurrencyHandler={setCurrency} />
      <button className='add-expense-form-button' onClick={handleAddExpenseButtonClick}>Add</button>
    </div>
  );
}