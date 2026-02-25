import React from 'react'

function Step2({ onChange, data}) {
    const { phone, email } = data || {};

    const handleChange = (inputKey) => {
        return (e) => {
            onChange({inputKey, value: e.target.value, stepName: "step2"})
        }
    }
    return (
        <fieldset>
                <legend>Contact Details</legend>
                <label>
                    <span>Phone Number</span>
                    <input type="text" value={phone} onChange={handleChange("phone")} />
                </label>
                <label>
                    <span>Email</span>
                    <input type="text" value={email} onChange={handleChange("email")} />
                </label>
        </fieldset>
    )
}

export default Step2
