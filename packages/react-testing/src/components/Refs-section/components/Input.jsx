import React, { forwardRef } from 'react';

function Input(props, ref) {
    const {
        type,
        name,
        label,
        placeholder,
        inputChange,
    } = props;

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={(e) => inputChange(e.target.value)}/>
        </div> 
    )
}

export default forwardRef(Input);