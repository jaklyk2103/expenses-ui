export type Currency = {
  code: CurrencyCode,
  description: String;
}

export enum CurrencyCode {
  "PLN" = "PLN",
  "EUR" = "EUR",
  "USD" = "USD"
}

export const currencies: Currency[] = [
  {
    code: CurrencyCode.PLN,
    description: "Polish Zloty"
  },
  {
    code: CurrencyCode.EUR,
    description: "Euro"
  },
  {
    code: CurrencyCode.USD,
    description: "American Dollar"
  }
]