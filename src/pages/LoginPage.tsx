import "../components/modal/modal.scss"
import {useState} from "react";
import Email from "../components/Email";
import Password from "../components/PasswordAndConfirm";
import {Formik, Field, Form} from "formik";
import * as Yup from 'yup';
import Button from "../components/Button";

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
    .min(6, 'Password should be more than 6 characters')
    .max(256, 'Password should be less than 256 characters'),
})

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleModalVisibility = () => {
    setIsVisible(!isVisible);
  }

  const initialValues: FormValues = {
    email: '',
    password: '',
    remember: false,
  }

  return (
    <div className={'field ' + `${isVisible ? 'show' : ''}`}>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          console.log(values); //for example that working
        }}>
        <Form>
          <div className='modal'>
        <span className='close'
              onClick={toggleModalVisibility}>
        </span>
            <h2 className='title'>Login to the Lessoner</h2>
            <Field name='email'
                   component={Email}/>
            <Field name='password' component={Password} minSymbol={6} maxSymbol={256} isConfirm={false}/>
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