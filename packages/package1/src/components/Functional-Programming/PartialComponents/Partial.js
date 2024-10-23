import React from 'react';

const Button = ({ size, text, color, ...props }) => {
    return <button
        style={{
            backgroundColor: color,
            fontSize: size === "small" ? "8px": "32px"
        }}>
        {text}
    </button>
};

// partial component takes in partialProps and initial Component with its props to return another component with partialProps applied.
const partialComponent = (Component, partialProps) => {
    return (props) => {
        return <Component {...props} {...partialProps} />
    }
};

const RedButton = partialComponent(Button, {
    color: "red"
});

const SmallRedButton = partialComponent(RedButton, {
    size: "small"
});

export {
    RedButton,
    SmallRedButton
};
