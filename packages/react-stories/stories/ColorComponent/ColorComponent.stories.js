import Color from '@react-patterns/react/src/atoms/Color';
import React from 'react';

export default {
    title: "Color Component",
    component: Color
}

const withBlack = {
    render: (props) => <Color {...props} />,
    args: {
        hexCode: "#000",
        width: "2rem",
        height: "2rem"
    }
}

export {
    withBlack
};
