import React, {useState} from 'react';
import classes from './GenderSelector.module.scss';
import '../index.scss';

const GenderSelector: React.FC = (props) => {
    const [radio, setRadio] = useState<string>('');
    const [radioError, setRadioError] = useState<string>(''); 
    const GENDER__MALE = 'male';
    const GENDER__FEMALE = 'female';
    const GENDER__OTHER = 'other';

    const errorHandler = () => {
        if (radio === "") {
            setRadioError('Please select Your gender');
        } else {
            setRadioError(''); 
        }
    }

    const getOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRadio(e.target.name);
        setRadioError('');
    }

    return (
        <div className={classes.gender__wrapper}>
            <label className={classes.label}> 
                <div className={classes.radio__wrapper}>
                    <p className={classes.radio__title}>
                        Select Your Gender
                    </p>
                    <div className={classes.radio__items}>
                        <div className={classes.radio__item}>
                            <label className={classes.radio__text}> 
                                <input 
                                    className={classes.radio__inner}
                                    type='radio'
                                    name={GENDER__MALE}
                                    checked={radio === GENDER__MALE}
                                    onChange={getOnChange}
                                    {...props} 
                                />
                                Male
                            </label>
                        </div>
                        <div className={classes.radio__item}>
                            <label className={classes.radio__text}> 
                                <input 
                                    className={classes.radio__inner}
                                    type='radio'
                                    name={GENDER__FEMALE}
                                    checked={radio === GENDER__FEMALE}
                                    onChange={getOnChange}
                                    {...props} 
                                />
                                Female
                            </label>
                        </div>
                        <div className={classes.radio__item}> 
                            <label className={classes.radio__text}>
                                <input 
                                    className={classes.radio__inner}
                                    type='radio'
                                    name={GENDER__OTHER}
                                    checked={radio === GENDER__OTHER}
                                    onChange={getOnChange}
                                    {...props} 
                                />
                                Other
                            </label>
                        </div>
                    </div>
                </div>
                {(radioError) && <div style={{color: 'red'}}>{radioError}</div>}
                
            </label>
        </div>
    );
}

export default GenderSelector;

