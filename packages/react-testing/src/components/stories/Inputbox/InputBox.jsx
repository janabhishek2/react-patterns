import React from 'react';
import './Inputbox.css';

export default function(props) {
    const { size , ...rest } = props;
    
    return (
        <input className={`inputbox ${size}`} {...rest} />
    )
};
