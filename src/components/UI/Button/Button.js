import React from 'react';
import classes from './Button.module.css';

const modalbtn = (props) => {
    return (
    <button 
    className={[classes.Button, classes[props.btnstyle]].join(' ')}
    onClick={props.clicked}
    disabled={props.disabled}
    >
        {props.children}
    </button>
    )
}

export default modalbtn;