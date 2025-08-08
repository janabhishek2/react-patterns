import React, { useReducer, useState } from 'react'

function Form() {
    const InitialState = {
        fname: "",
        age: "",
        phone: ""
    };

    const formReducerFn = (state, action) => {
        switch(action.type) {

            case "fname":
            case "age":
            case "phone": {
                return {
                    ...state,
                    ...action.payload
                }
            }


            default: {
                return state;
            }
        }
    };

    const [form, dispatch] = useReducer(formReducerFn, InitialState);

    const handleFnameChange = (e) => {
        dispatch({
            type: "fname",
            payload: { fname: e.target.value }
        })
    } 
    const handleAgeChange = (e) => {
        dispatch({
            type: "age",
            payload: { age: e.target.value }
        })
    }
    const handlePhoneChange = (e) => {
        dispatch({
            type: "phone",
            payload: { phone: e.target.value }
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