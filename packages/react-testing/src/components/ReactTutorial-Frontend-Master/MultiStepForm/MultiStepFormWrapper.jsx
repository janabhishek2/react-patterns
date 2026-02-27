import React, { useState } from 'react'
import PropTypes from 'prop-types'
import MultiStepForm from './MultiStepForm'

function MultiStepFormWrapper(props) {
    
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [hasCancelled, setHasCancelled] = useState(false);

    const handleSubmit = (data) => {
        console.log("Data is, ", data);
        setFormSubmitted(true);
    };

    const handleCancel = () => {
        setHasCancelled(true);
    }

    return (
        <>
            {formSubmitted && <h1>Form has been submitted!</h1>}
            {!formSubmitted && <MultiStepForm onSubmit={handleSubmit} onCancel={handleCancel} />}

            {hasCancelled && <h1>User tries to cancel!</h1>}
        </>
    )
}

MultiStepFormWrapper.propTypes = {

}

export default MultiStepFormWrapper
