import { render } from '@testing-library/react';
import React, { useState } from 'react';

export default function UnControlledLogin(props) {
    const { children } = props;

    // save curr-step state
    const [currStep, setCurrStep] = useState(0);

    
    // we define goNext at parent element and pass via props to children
    const childrenArr = React.Children.toArray(children);

    const goNext = () => {
        if(currStep === childrenArr.length-1) {
            return;
        } 
        setCurrStep(currStep + 1);
    };

    const renderStep = childrenArr[currStep];

    return React.isValidElement(renderStep) ? (
        React.cloneElement(renderStep, {goNext})
    ) : renderStep
};
