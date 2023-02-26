import { ReactNode } from "react";
import { Currency, currencies } from "./currencies";

const currencyCodes = currencies.map(currency => currency.code);

export default function SelectCurrencyFormField() {
  const createOptionTags = (): ReactNode[] => {
    return currencyCodes.map(currencyCode => {
      return <option value={currencyCode.toString()}>{currencyCode.toString()}</option>
    })
  }

  return(
    <select>
      {createOptionTags()}
    </select>
  )
}