import Title from "../Title";
import FormInput from "../FormInput";
import Button from "../Button";
import "../style/style.scss"

const AboutUs = ({minSymbol, maxSymbol}) => {
  const userNameRegex = new RegExp('^[A-Z\d]{'+minSymbol+','+maxSymbol+'}$','i');
  return (
    <div className={'modal'}>
      <Title textTitle={'Tell us about yourself'}/>
      <FormInput label={'User name'}
                 validation={userNameRegex}
                 type={'text'}
                 required={'required'}/>
      <Button type={'submit'} textButton={'Finish'}/>
    </div>
  )
}
export default AboutUs;