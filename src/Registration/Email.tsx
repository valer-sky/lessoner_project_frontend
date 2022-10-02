import React, { useState } from "react";
import './Email.scss';

type EmailProps = {
    isValid: boolean;
}

export const emailValidation = (email: string, isRegistred: boolean = false) => {
    const errors: { email?: string } = {};
    const invalidationRools = [
        /^\s*$/, // check string not empty
        /^[^@]+$/, // @ should exist
        /@[^@]*@/, // onle one @ is admissible
        /^\./, // '.' can't be first symbol
        /\.{2,}.+(?=@)/, // '.' can't repeat more than once in a row
        /\.(?=@)/, // '.' can't be before @
        /[^A-Za-z0-9_!#$%&'.*+\-/=?\^`{|}~].*(?=@)/, // include only valid symbols before @
        /(?<=@).*[^a-z0-9\-.]/, // include only valid symbols before @
    ];

    if (invalidationRools.some(rule => rule.test(email))) {
        errors.email = 'Please enter a valid email address';
    } else if (isRegistred) {
        errors.email = 'This email address is already registered. Use the link “Already have an account?';
    }
    return errors;
};

const Email = ({ isValid }: EmailProps) => {
    const [value, setValue] = useState('');

    const handleChanges = (e: React.FormEvent<HTMLInputElement>): void => {
        e.preventDefault();
        (e.currentTarget.id === 'email') && (setValue(e.currentTarget.value));
    };

    return (
        <div className="EmailWrapper">
            <label htmlFor="email" className="EmailLabel">Email</label>
            <input type="text" id="email" name="email" required maxLength={256} className={"EmailInput" + (isValid ? "" : " invalidEmailInput")} placeholder="username2gmail.com" value={value} onChange={handleChanges} />
        </div>
    )
};

export default Email;