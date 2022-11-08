import "../components/modal/modal.scss";
import Button from "../components/Button";
import PhoneNumber from "../components/PhoneNumber";
import {useState} from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { useIntl } from "react-intl";

const defaultCountry = '375';

const PhoneNumberPage = () => {
  const intl = useIntl();
  const [error, setError] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(defaultCountry);

  return (
    <div className='field'>
      <div className='modal'>
        <Link to='/'>
          <span className='close'></span>
        </Link>
        <h2 className='title'>
          <FormattedMessage id="app.phoneNumberPage.title" />
        </h2>
       
        <PhoneNumber setError={setError}
                     error={error}
                     phoneNumber={phoneNumber}
                     setPhoneNumber={setPhoneNumber}/>
        <Button buttonType='submit'
                buttonText={intl.formatMessage({ id: 'app.phoneNumberPage.submit' })} />
      </div>
    </div>
  )
}
export default PhoneNumberPage;