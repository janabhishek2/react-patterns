import React, { useState } from 'react';

// uncontrolled login is a un-controlled component as app.js has no state with itself. all state is defined at un-controlled level.
export default function UnControlledLogin(props) {
    const { children, onDone } = props;
    const [data, setData] = useState([]);
   
    // save curr-step state
    const [currStep, setCurrStep] = useState(0);

    // we define goNext at parent element and pass via props to children
    const childrenArr = React.Children.toArray(children);

    // goNext callback is passed to all child components to send data to parent component
    const goNext = (currData) => {
        const nextStep = currStep + 1;
        const newData = [...data, currData];
        setData(newData);

        if(currStep === childrenArr.length-1) {
            onDone(newData)
            return;
        } 
        setCurrStep(nextStep);
    };

    const renderStep = childrenArr[currStep];

    return React.isValidElement(renderStep) ? (
        React.cloneElement(renderStep, {goNext})
    ) : renderStep
};
