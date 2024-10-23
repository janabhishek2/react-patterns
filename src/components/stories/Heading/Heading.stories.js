import React from 'react';
import Heading from './Heading';

export default {
    title: "Components/Heading",
    component: Heading,
    argTypes: {
        level: { control: "radio" },
        children: { control: "text" }
    }
};

export const SampleStory = {
    render: ({ children, ...rest}) => {
        return <Heading {...rest}>{children}</Heading>
    },
    args: {
        level: 3,
        children: "Testing"
    }
}