import { useState } from "react";
import "./addExpenseForm.css";

export default function AddExpenseForm() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [description, setDescription] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currency, setCurrency] = useState('PLN');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [value, setValue] = useState(0);

  return(
    <form className="add-expense-form-wrapper">
      <input className='add-expense-form-input' type="text" placeholder="description" value={description} />
      <input className='add-expense-form-input' type="value" placeholder="description" value={value} />
      <input className='add-expense-form-input' type="currency" placeholder="description" value={currency} />
    </form>
  );
}