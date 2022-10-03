import FormInput from "./FormInput";
import "./style/style.scss";

const Registration = ({minSymbol, maxSymbol}) => {
  const passwordRegex = new RegExp("^[-/\\=!#$%&'*+?^_`{|}~.A-Z\d]{" + minSymbol + "," + maxSymbol + "}$", "i");
  return (
    <div className={'modal'}>
      <form style={{margin: '20px 0'}}>
        <FormInput label={'Password'}
                   validation={passwordRegex}
                   type={'password'}
                   required={'required'}
                   name={'hidden'}/>
        <FormInput label={'Confirm password'}
                   type={'password'}
                   required={'required'}
                   name={'hidden'}/>
      </form>
    </div>
  )
}
export default Registration;