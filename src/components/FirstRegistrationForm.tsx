import { Formik, Form } from 'formik';
import './FirstRegistrationForm.scss';
import Email from "./Email";

type RegistrationFormObjectType = {
	email: string,
	password: string,
	confirmPassword: string,
	agreeCheckbox: boolean
}

interface FormValues {
	email: string;
	password: string;
	confirmPassword: string;
	agreeCheckbox: boolean;
}

const FirstRegistrationForm = () => {
	const emailInvnvalidationRules = [
		/^\s*$/, // check string not empty
		/^[^@]+$/, // @ should exist
		/@[^@]*@/, // onle one @ is admissible
		/^\./, // '.' can't be first symbol
		/\.{2,}.+(?=@)/, // '.' can't repeat more than once in a row
		/\.(?=@)/, // '.' can't be before @
		/[^A-Za-z0-9_!#$%&'.*+\-/=?\^`{|}~].*(?=@)/, // include only valid symbols before @
		/(?<=@).*[^a-z0-9\-.]/, // include only valid symbols before @
	];
	const passwordLengthLimits = [6, 256];
	const passwordRegex = new RegExp("^[-/=!#$%&'*+?^_`{|}~.A-Z0-9]{" + passwordLengthLimits[0] + "," + passwordLengthLimits[1] + "}$", "i");

	const formValidation = (values: RegistrationFormObjectType) => {
		const errors: RegistrationFormObjectType = { email: '', password: '', confirmPassword: '', agreeCheckbox: false };
		if (emailInvnvalidationRules.some(rule => rule.test(values.email))) {
			errors.email = 'Please enter a valid email address';
		} else if (!passwordRegex.test(values.password)) {
			errors.password = "An invalid character is present in the password. Password must be between 6 and 256 characters. upper or lower case Latin letters (a–z, A–Z);numbers from 0 to 9;symbols ! # $ % & ' * + - / = ? ^ _ ` { | } ~";
		} else if (values.password !== values.confirmPassword) {
			errors.password = 'Passwords do not match';
		} else if (!values.agreeCheckbox) {
			errors.password = 'You must consent to the processing of your personal data, in accordance with the Terms';
		}
		return errors;
	}
	const submitFirstStepForm = (values: RegistrationFormObjectType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			setSubmitting(false);
		}, 400);
	}
	return (
		<Formik
			initialValues={{ email: '', password: '', confirmPassword: '', agreeCheckbox: false }}
			validate={formValidation}
			onSubmit={submitFirstStepForm}
		>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
				isSubmitting,
				/* and other goodies */
			}) => (
				<form className="Form__submit">
					<Email value={values.email} error={errors.email!} handleChanges={handleChange} handleBlur={handleBlur} />
					<input
						type="email"
						name="email"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.email}
					/>
					{errors.email && touched.email && errors.email}
					<input
						type="password"
						name="password"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.password}
					/>
					{errors.password && touched.password && errors.password}
					<button type="submit" disabled={isSubmitting}>
						Submit
					</button>
				</form>
			)}
		</Formik>
	)



	// return (
	//     <div>
	//         <Formik
	//             initialValues={{ email: '', password: '' }}
	//             onSubmit={submit}
	//         >
	//             {({ setValues, setErrors, values, errors }) => (
	//                 <Form className="Form__submit">
	//                     <Email isValid={true}
	//                         cbGetEmail={(emailVal: { email: string }) => setValues({ ...values, ...emailVal })}
	//                         cbGetErrors={(emailErr: { error: string }) => setErrors({ ...errors, ...emailErr })} />
	//                     <div><button type="submit" >
	//                         Next
	//                     </button></div>
	//                 </Form>
	//             )}
	//         </Formik>
	//     </div>
	// )
};

export default FirstRegistrationForm;