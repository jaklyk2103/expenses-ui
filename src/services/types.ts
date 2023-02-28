export type GetAllExpensesForUserPayload = {
  email: string;
}

export type AddExpensePayload = {
  email: string,
  expense: Expense
}

export type Expense = {
  id?: string;
  date: Date;
  expenseOwnerEmail: string;
  description: string;
  value: number;
  currency: string;
}

export type ExpenseDTO = {
  id?: string;
  date: string;
  expenseOwnerEmail: string;
  description: string;
  value: number;
  currency: string;
}