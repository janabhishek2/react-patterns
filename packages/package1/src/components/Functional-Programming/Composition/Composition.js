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

export default Button;

export const SmallButton = (props) => {
    return <Button size="small" {...props}/>;
}

export const RedButton = (props) => {
    return <Button color="red" {...props}/>
}
