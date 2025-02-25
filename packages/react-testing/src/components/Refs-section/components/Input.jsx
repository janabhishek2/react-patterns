import React from 'react';

function Input(props) {
    const {
        type,
        name,
        label,
        placeholder,
        inputChange,
        ref
    } = props;

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={(e) => inputChange(e.target.value)}/>
        </div> 
    )
}

export default Input