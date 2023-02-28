import { ChangeEvent, MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ExpensesService } from "../../services/expensesService";
import { ApiClient } from "../../shared/apiClient/apiClient";
import DatePicker from "../datePicker/datePicker";
import SelectCurrencyFormField from "../selectCurrencyFormField/selectCurrencyFormField";
import "./addExpenseForm.css";

export default function AddExpenseForm() {
  const navigate = useNavigate();
  const [description, setDescription] = useState('');
  const [currency, setCurrency] = useState('PLN');
  const [value, setValue] = useState(0);
  const [date, setDate] = useState(new Date());

  const handleAddExpenseButtonClick = async (event: MouseEvent) => {
    event.preventDefault();

    const apiClient = new ApiClient();
    const expenseService = new ExpensesService(apiClient);
    const userEmail = window.localStorage.getItem('userEmail') as string;
    await expenseService.addExpense({
      email: userEmail,
      expense: {
        date,
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
      <div>
        <label className="add-expense-form-label" htmlFor="date">Date</label>
        <DatePicker id="date" name="date" date={date} setDate={setDate} className='add-expense-form-input' />
      </div>
      <div>
        <label className="add-expense-form-label" htmlFor="description">Description</label>
        <input id="description" name="description" className='add-expense-form-input' type="text" onChange={handleDescriptionInputChange} />
      </div>
      <div>
        <label className="add-expense-form-label" htmlFor="value">Value</label>
        <input id="value" name="value" className='add-expense-form-input' type="number" min="1" step="any" onChange={handleValueInputChange} />  
      </div>
      <div>
        <label className="add-expense-form-label" htmlFor="currency">Currency</label>
        <SelectCurrencyFormField id="currency" name="currency" className='add-expense-form-input' setCurrencyHandler={setCurrency} />  
      </div>
      
      <button className='add-expense-form-button' onClick={handleAddExpenseButtonClick}>Add</button>
    </div>
  );
}