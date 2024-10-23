import React from 'react'

function ControlledFlowChild(props) {

    const { children, goNext, currIndex } = props;
    const childrenArray = React.Children.toArray(children);

    const currRender = childrenArray[currIndex];

    return React.isValidElement(currRender) ? (
        React.cloneElement(currRender, { goNext })
    ) : currRender || null;
}

export default ControlledFlowChild;
