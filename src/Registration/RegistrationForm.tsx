import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './RegistrationForm.scss';
import Email from "./Email";

const registrationFormValidate = (values: any) => {
    const errors: { email?: string } = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }
    return errors;
}

type RegistrationFormObjectType = {
    email: string
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
                initialValues={{ email: '' }}
                validate={registrationFormValidate}
                onSubmit={submit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Email isValid={false} />
                        <ErrorMessage name="email" component="div" />
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