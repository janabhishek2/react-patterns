import React from 'react'

function Step1({ onChange, data }) {
    const { name, age } = data || {};

    const handleChange = (inputKey) => {
        return (e) => {
        onChange({ inputKey, value: e.target.value, stepName: "step1"  })
    }
    }
    return (
        <fieldset>
                <legend>Personal Details</legend>
                <label>
                    <span>Name</span>
                    <input type="text" value={name} onChange={handleChange('name')}/>
                </label>
                <label>
                    <span>Age</span>
                    <input type="text" value={age} onChange={handleChange('age')}/>
                </label>
            </fieldset>
    )
}

export default Step1
