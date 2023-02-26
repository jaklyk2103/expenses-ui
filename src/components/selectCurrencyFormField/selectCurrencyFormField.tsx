import { ReactNode, ChangeEvent } from "react";
import { currencies } from "./currencies";

type SelectCurrencyFormFieldProps = {
  setCurrencyHandler: Function;
  className?: string;
}

const currencyCodes: string[] = currencies.map(currency => currency.code.toString());

export default function SelectCurrencyFormField(props: SelectCurrencyFormFieldProps) {
  const createOptionTags = (): ReactNode[] => {
    return currencyCodes.map(currencyCode => {
      return <option value={currencyCode}>{currencyCode}</option>
    });
  }

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    props.setCurrencyHandler(event.target.value);
  }

  return (
    <select className={props.className} onChange={handleSelect}>
      {createOptionTags()}
    </select>
  )
}