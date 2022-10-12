import "./button.scss"

type ButtonProps = {
  buttonType: 'button' | 'submit' | 'reset' | undefined;
  buttonText: string;
}

const Button = ({buttonType, buttonText}: ButtonProps) => {
  return (
    <div>
      <button type={buttonType} className='button'>{buttonText}</button>
    </div>
  )
}
export default Button;