import { ChangeEvent, MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ExpensesService } from "../../services/expensesService";
import { Expense } from "../../services/types";
import { ApiClient } from "../../shared/apiClient/apiClient";
import DatePicker from "../datePicker/datePicker";
import SelectCurrencyFormField from "../selectCurrencyFormField/selectCurrencyFormField";
import "./editExpenseForm.css";

type EditExpenseFormProps = {
  expense: Expense;
}

export default function EditExpenseForm({ expense }: EditExpenseFormProps) {
  const navigate = useNavigate();
  const [description, setDescription] = useState(expense.description);
  const [currency, setCurrency] = useState(expense.currency);
  const [value, setValue] = useState(expense.value);
  const [date, setDate] = useState(expense.date);
  const [shouldDisplayDeleteWarning, setShouldDisplayDeleteWarning] = useState(false);

  const handleEditExpenseButtonClick = async (event: MouseEvent) => {
    event.preventDefault();

    const apiClient = new ApiClient();
    const expenseService = new ExpensesService(apiClient);
    const userEmail = window.localStorage.getItem('userEmail') as string;

    await expenseService.addOrUpdateExpense({
      email: userEmail,
      expense: {
        date,
        currency,
        description,
        value,
        expenseOwnerEmail: userEmail,
        id: expense.id
      }
    });
    navigate('/');
  };

  const handleDeleteExpenseButtonClick = async (event: MouseEvent) => {
    event.preventDefault();

    if (!shouldDisplayDeleteWarning) {
      setShouldDisplayDeleteWarning(true);
      return;
    }
    
    setShouldDisplayDeleteWarning(false);
    const apiClient = new ApiClient();
    const expensesService = new ExpensesService(apiClient);
    const userEmail = window.localStorage.getItem('userEmail') as string;

    await expensesService.deleteExpense({
      email: userEmail,
      id: expense.id!
    });
    navigate('/');
  }

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
        <input id="description" name="description" value={description} className='add-expense-form-input' type="text" onChange={handleDescriptionInputChange} />
      </div>
      <div>
        <label className="add-expense-form-label" htmlFor="value">Value</label>
        <input id="value" name="value" value={value} className='add-expense-form-input' type="number" min="1" step="any" onChange={handleValueInputChange} />  
      </div>
      <div>
        <label className="add-expense-form-label" htmlFor="currency">Currency</label>
        <SelectCurrencyFormField id="currency" name="currency" className='add-expense-form-input' setCurrencyHandler={setCurrency} />  
      </div>
      
      <button className='add-expense-form-button' onClick={handleEditExpenseButtonClick}>Edit</button>
      <button className='delete-expense-form-button' onClick={handleDeleteExpenseButtonClick}>Delete</button>
      {shouldDisplayDeleteWarning && <p>Are you sure?</p>}
    </div>
  );
}