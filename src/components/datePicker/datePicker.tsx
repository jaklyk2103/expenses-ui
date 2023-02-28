import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type DatePickerProps = {
  id?: string;
  name?: string;
  className?: string;
  date: Date;
  setDate: Function;
}

export default function DatePickerFormField(props: DatePickerProps) {
  const { date, setDate, className } = props;

  const handleDateChange = (date: Date) => {
    setDate(date);
  }
  return (
    <DatePicker id={props.id} name={props.name} className={className} maxDate={new Date(Date.now())} selected={date} onChange={handleDateChange} />
  );
}