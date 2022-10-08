import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useState} from "react";
import "./birthday.scss";

const BirthdayPicker = () => {
  const [value, setValue] = useState<Date | null>(null);
  const fieldHandler = (date: Date) => {
    setValue(date);
  }
  const minYear = new Date((new Date()).getTime() - 120 * 365.2 * 86400000 - 6 * 86400000 + 29.7 * 60000);

  return (
    <div className='birthday'>
      <label className='birthdaylabel'>When is your birthday?</label>
      <DatePicker onChange={(e: Date) => fieldHandler(e)}
                  selected={value}
                  placeholderText='--.--.----'
                  dateFormat='dd.MM.yyyy'
                  maxDate={new Date()}
                  minDate={new Date(minYear)}
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  className='birthdayInput'
                  required/>
    </div>
  )
}
export default BirthdayPicker;