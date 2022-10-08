import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useState} from "react";
import "./birthday.scss";

const BirthdayPicker = () => {
  const [value, setValue] = useState<Date | null>(null);
  const fieldHandler = (date: Date) => {
    setValue(date);
  }

  return (
    <div className='birthday'>
      <label className='birthdaylabel'>When is your birthday?</label>
      <DatePicker onChange={(e: Date) => fieldHandler(e)}
                  selected={value}
                  placeholderText='--.--.----'
                  dateFormat='dd.MM.yyyy'
                  maxDate={new Date()}
                  minDate={new Date('01.01.1900')}
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  className='birthdayInput'
                  required/>
    </div>
  )
}
export default BirthdayPicker;