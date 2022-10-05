import { Formik, Form } from 'formik';
import './RegistrationForm.scss';
import Email from "./Email";

type RegistrationFormObjectType = {
    email: string,
    password: string
}

const RegistrationForm = () => {
    const submit = (values: RegistrationFormObjectType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        //submit code
    }

    return (
        <div>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={submit}
            >
                {({ setValues, setErrors, values, errors }) => (
                    <Form className="Form__submit">
                        <Email isValid={true}
                            cbGetEmail={(emailVal: { email: string }) => setValues({ ...values, ...emailVal })}
                            cbGetErrors={(emailErr: { error: string }) => setErrors({ ...errors, ...emailErr })} />
                        <div><button type="submit" >
                            Next
                        </button></div>
                    </Form>
                )}
            </Formik>
        </div>
    )
};

export default RegistrationForm;