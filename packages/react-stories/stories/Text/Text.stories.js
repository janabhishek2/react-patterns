import Text from '@react-patterns/react/src/atoms/Text';
import React from 'react';

export default {
    title: "Components/Text",
    component: Text
};

const DefaultText = {
    render: (props) => <Text {...props} />,
    args: {
        children: "Default Text",
    }
};

const LargeText = {
    render: (props) => <Text {...props} />,
    args: {
        size: "lg",
        children: "Large text"
    }
}

const ExtraLargeText = {
    render: (props) => <Text {...props} />,
    args: {
        size: "xl",
        children: "Extra Large text"
    }
}

export {
    DefaultText,
    LargeText,
    ExtraLargeText
}