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
  termsAndConditions: boolean;
}

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, 'Email should be more than 3 characters')
    .max(256, 'Email should be less than 256 characters'),
  password: Yup.string()
    .min(6, 'Password should be more than 6 characters')
    .max(256, 'Password should be less than 256 characters'),
  termsAndConditions: Yup.boolean().isTrue(
    'You should accept our terms and conditions'
  ),
})

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(true);

  const showModal = () => {
    setIsVisible(!isVisible);
  }

  const initialValues: FormValues = {
    email: '',
    password: '',
    termsAndConditions: false,
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
              onClick={showModal}>
        </span>
            <h2 className='title'>Login to the Lessoner</h2>
            <Field name='email'
                   component={Email}/>
            <Field name='password' component={Password} minSymbol={6} maxSymbol={256} isConfirm={false}/>
            <div>
              <Field name='termsAndConditions' required type='checkbox' id='termsAndConditions'/>
              <label htmlFor='termsAndConditions'>
                I agree to the processing of my personal data in accordance with the <a href='#!'>Terms</a>
              </label>
            </div>
            <Button buttonType={'submit'} buttonText={'Sign in'}/>
          </div>
        </Form>
      </Formik>
    </div>
  )
}
export default LoginPage;