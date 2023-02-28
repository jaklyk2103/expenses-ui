import { AddExpensePayload, Expense, GetAllExpensesForUserPayload } from "./types";
import { IApiClient } from "../shared/apiClient/apiClient.interface";

export class ExpensesService {
  private readonly apiClient: IApiClient;
  constructor(apiClient: IApiClient) {
    this.apiClient = apiClient;
  }

  async getAllExpensesForUser(payload: GetAllExpensesForUserPayload): Promise<Expense[]> {
    const { email } = payload;
    const expenses = await this.apiClient.requestApi({
      method: 'GET',
      url: 'user/expenses',
      params: {
        email
      }
    }) as Expense[];
    return expenses.map(expense => ({
      ...expense,
      date: new Date()
    }));
  }

  async addExpense(payload: AddExpensePayload): Promise<void> {
    const { email, expense } = payload;

    await this.apiClient.requestApi({
      method: 'POST',
      url: 'expense',
      data: {
        email,
        ...expense
      },
      withCredentials: true,
    });
  }
}