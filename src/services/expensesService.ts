import { AddExpensePayload, Expense, GetAllExpensesForUserPayload } from "./types";
import axios, { AxiosInstance } from 'axios';

export class ExpensesService {
  private axiosInstance: AxiosInstance;
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://fs4d02d2t1.execute-api.eu-west-1.amazonaws.com/prod/'
    });
  }

  async getAllExpensesForUser(payload: GetAllExpensesForUserPayload): Promise<Expense[]> {
    const { email } = payload;
    const result = await this.axiosInstance({
      method: 'GET',
      url: 'user/expense',
      params: {
        email
      }
    })
    const expenses = result.data as Expense[];
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
      }
    });
  }
}