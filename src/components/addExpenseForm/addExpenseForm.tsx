import { useState } from "react";
import "./addExpenseForm.css";

export default function AddExpenseForm() {
  const [description, setDescription] = useState('');
  const [currency, setCurrency] = useState('PLN');
  const [value, setValue] = useState(0);

  return(
    <form className="add-expense-form-wrapper">
      <input className='add-expense-form-input' type="text" placeholder="description" value={description} />
      <input className='add-expense-form-input' type="value" placeholder="description" value={value} />
      <input className='add-expense-form-input' type="currency" placeholder="description" value={currency} />
    </form>
  );
}