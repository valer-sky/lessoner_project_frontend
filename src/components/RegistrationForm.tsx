import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormik, setNestedObjectValues, } from 'formik';
import './RegistrationForm.scss';
import Email from "./Email";


type RegistrationFormObjectType = {
    email: string,
    password: string
}

const RegistrationForm = () => {

    const submit = (values: RegistrationFormObjectType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        console.log(1)
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    }

    return (
        <div>
            <Formik
                initialValues={{ email: '', password: '' }}
                // validate={registrationFormValidate}
                onSubmit={submit}
            >
                {({ isSubmitting, setValues, setErrors, values, errors }) => (
                    <Form>
                        <Email isValid={false}
                            cbGetEmail={(emailVal: { email: string }) => setValues({ ...values, ...emailVal })}
                            cbGetErrors={(emailErr: { error: string }) => setErrors({ ...errors, ...emailErr })} />
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
};

export default RegistrationForm;