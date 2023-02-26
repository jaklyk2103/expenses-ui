import { AddExpensePayload, Expense, GetAllExpensesForUserPayload } from "./types";
import axios, { AxiosInstance } from 'axios';

export class ExpensesService {
  private axiosInstance: AxiosInstance;
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.REACT_APP_API_URL
    });
  }

  async getAllExpensesForUser(payload: GetAllExpensesForUserPayload): Promise<Expense[]> {
    const { email } = payload;
    const result = await this.axiosInstance({
      method: 'GET',
      url: 'user/expenses',
      params: {
        email
      },
      withCredentials: true
    })
    const expenses = result.data as Expense[];
    console.log(`expenses: ${JSON.stringify(expenses)}`);
    return expenses;
  }

  async addExpense(payload: AddExpensePayload): Promise<void> {
    const { email, expense } = payload;

    await this.axiosInstance({
      method: 'POST',
      url: 'expense',
      data: {
        email,
        ...expense
      },
      withCredentials: true
    });
  }
}