import "../components/modal/modal.scss";
import Email from "../components/Email";
import Password from "../components/PasswordAndConfirm";
import {Formik, Field, Form} from "formik";
import * as Yup from 'yup';
import Button from "../components/Button";
import {Link} from 'react-router-dom';

const minSymbol = 6;
const maxSymbol = 256;
const passwordRegex = new RegExp("^[-/=!#$%&'*+?^_`{|}~.A-Z0-9]{" + minSymbol + "," + maxSymbol + "}$", "i");

interface FormValues {
  email: string;
  password: string;
  remember: boolean;
}

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, 'Email should be more than 3 characters')
    .max(256, 'Email should be less than 256 characters'),
  password: Yup.string()
    .matches(passwordRegex)
    .min(6, 'Password should be more than 6 characters')
    .max(256, 'Password should be less than 256 characters'),
})

const LoginPage = () => {

  const initialValues: FormValues = {
    email: '',
    password: '',
    remember: false,
  }

  return (
    <div className='field'>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          console.log(values); //for example that working
        }}>
        <Form>
          <div className='modal'>
            <Link to='/'>
        <span className='close'>
        </span>
            </Link>
            <h2 className='title'>Login to the Lessoner</h2>
            <Field name='email'
                   component={Email}/>
            <Field name='password' component={Password} minSymbol={minSymbol} maxSymbol={maxSymbol} isConfirm={false}/>
            <div>
              <Field name='remember' type='checkbox' id='remember'/>
              <label htmlFor='remember'>
                Stay logged in
              </label>
            </div>
            <Button buttonType={'submit'} buttonText={'Sign in'} onClick={undefined}/>
          </div>
        </Form>
      </Formik>
    </div>
  )
}
export default LoginPage;