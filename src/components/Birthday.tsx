import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useState} from "react";
import "./birthday.scss";

const Birthday = () => {
  const [value, setValue] = useState<any>(null);
  const fieldHandler = (event: Date) => {
    setValue(event);
  }

  return (
    <div className='birthday'>
      <label className='birthdaylabel'>When is your birthday?</label>
      <DatePicker onChange={(e: any) => fieldHandler(e)}
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
export default Birthday;