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


function Default(args) {
    return <Heading {...args}>{args.children}</Heading>
};

const Heading3 = Default.bind({});
Heading3.args = {
    level: 3,
    children: "Default Heading"
}

export {
    Heading3
}