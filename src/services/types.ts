export type GetAllExpensesForUserPayload = {
  email: string;
}

export type AddExpensePayload = {
  email: string,
  expense: Expense
}

export type Expense = {
  expenseOwnerEmail: string;
  description: string;
  value: number;
  currency: string;
}