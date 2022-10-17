import { useState } from "react";
import './Email.scss';

type EmailProps = {
	field: object;
	error?: string;
}

const Email = ({ field, error }: EmailProps): JSX.Element => {
	const [value, setValue] = useState('');

	return (
		<div className="Email-Wrapper">
			<label htmlFor="email" className="Email-Label">Email</label>
			<input type="text" name="email" required minLength={3} maxLength={256} className={"Email-Input" + (error ? " invalid-Email-Input" : "")} placeholder="username@gmail.com" value={value} onChange={(e) => setValue(e.currentTarget.value)} {...field} />
			{error && <div><span className='error-Message'>{error}</span></div>}
		</div>
	)
};

export default Email;