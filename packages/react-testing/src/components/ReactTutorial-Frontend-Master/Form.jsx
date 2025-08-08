import React, { useReducer, useState } from 'react'

function Form() {
    const InitialState = {
        fname: "",
        age: "",
        phone: ""
    };

    const formReducerFn = (prevState, currState) => {
        return  {
            ...prevState,
            ...currState
        }
    };

    const [form, setForm] = useReducer(formReducerFn, InitialState);

    const handleFnameChange = (e) => {
        setForm({ fname: e.target.value });
    } 
    const handleAgeChange = (e) => {
        setForm({ age: e.target.value });
    }
    const handlePhoneChange = (e) => {
        setForm({ 
            phone: e.target.value
        })
    };

    return (
        <form>
            <label htmlFor='fname'>First Name: </label>
            <input type="text" id="fname" value={form.fname} onChange={handleFnameChange} />

            <label htmlFor='age'>Age: </label>
            <input type="text" id="age" value={form.age} onChange={handleAgeChange} />

            <label htmlFor='phone'>Phone number: </label>
            <input type="text" id="phone" value={form.phone} onChange={handlePhoneChange} />
        </form>
    )
}

export default Form