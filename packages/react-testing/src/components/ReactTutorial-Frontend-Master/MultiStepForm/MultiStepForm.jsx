import React, { useState } from "react";
import "./multiStepForm.css";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";

const Page = {
    Step1: 1,
    Step2: 2,
};

const DefaultInputs = {
    step1: {
        name: "",
        age: ""
    },
    step2: {
        phone: "",
        email: ""
    }
}

function MultiStepForm() {
    const [currStep, setCurrStep] = useState(Page.Step1);

    const [inputs, setInputs] = useState(DefaultInputs);

    const handleChange = ({ inputKey, value, stepName }) => {
        const oldInputs = structuredClone(inputs);
        oldInputs[stepName][inputKey] = value;

        setInputs(oldInputs);
    }
    const Steps = {
        [Page.Step1]: Step1,
        [Page.Step2]: Step2,
    };

    const ComponentToRender = Steps[currStep];

    const nextButtonText = currStep === Page.Step2 ? "Submit" : "Next";
    const handleNext = () => {
        if (currStep < Page.Step2) {
            setCurrStep((prev) => prev + 1);
        } else {
            console.log("Submit Data");
        }
    };

    const handlePrev = () => {
        if (currStep > Page.Step1) {
            setCurrStep((prev) => prev - 1);
        } else {
            console.log("Can not goback");
        }
    };

    const handleCancel = () => {
        console.log("Cancelled!");
    }

    return (
        <div className="multi-step-form-wrapper">
            {/* Back button goes here */}
            {currStep > Page.Step1 && <button onClick={handlePrev}>Back</button>}

            <ComponentToRender onChange={handleChange} data={inputs[`step${currStep}`]}/>

            <div className="buttons">
                <button className="cancel" onClick={handleCancel}>Cancel</button>
                <button className="next" onClick={handleNext}>{nextButtonText}</button>
            </div>
        </div>
    );
}

export default MultiStepForm;
