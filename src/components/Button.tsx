import "./button.scss"
import {MouseEventHandler} from "react";

type ButtonProps = {
  buttonType: 'button' | 'submit' | 'reset' | undefined;
  buttonText: string;
  onClick: MouseEventHandler <HTMLButtonElement> | undefined;
}

const Button = ({buttonType, buttonText, onClick}: ButtonProps) => {
  return (
    <div>
      <button type={buttonType} className='button' onClick={onClick}>{buttonText}</button>
    </div>
  )
}
export default Button;