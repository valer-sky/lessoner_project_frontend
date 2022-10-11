import React, {useState} from 'react';
import classes from './GenderSelector.module.scss';
import '../index.scss';

const GenderSelector = (props) => {
    const [radio, setRadio] = useState('');
    const [radioError, setRadioError] = useState(''); 
    const GENDER__MALE = 'male';
    const GENDER__FEMALE = 'female';
    const GENDER__OTHER = 'other';

    const blurHandler = () => {
        if (radio === "") {
            setRadioError('Please select Your gender');
        } else {
            setRadioError(''); 
        }
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
                            <input 
                                className={classes.radio__inner}
                                type='radio'
                                name={GENDER__MALE}
                                checked={radio === GENDER__MALE}
                                onChange={e => {
                                    setRadio(e.target.name);
                                    setRadioError('');
                                }}
                                {...props} 
                            />
                            <p className={classes.radio__text}>
                                Male
                            </p>
                        </div>
                        <div className={classes.radio__item}> 
                            <input 
                                className={classes.radio__inner}
                                type='radio'
                                name={GENDER__FEMALE}
                                checked={radio === GENDER__FEMALE}
                                onChange={e => {
                                    setRadio(e.target.name);
                                    setRadioError('');
                                }}
                                {...props} 
                            />
                            <p className={classes.radio__text}>
                                Female
                            </p>
                        </div>
                        <div className={classes.radio__item}> 
                            <input 
                                className={classes.radio__inner}
                                type='radio'
                                name={GENDER__OTHER}
                                checked={radio === GENDER__OTHER}
                                onChange={e => {
                                    setRadio(e.target.name);
                                    setRadioError('');
                                }}
                                {...props} 
                            />
                            <p className={classes.radio__text}>
                                Other
                            </p>
                        </div>
                    </div>
                </div>
                {(radioError) && <div style={{color: 'red'}}>{radioError}</div>}
                
            </label>
        </div>
    );
}

export default GenderSelector;

