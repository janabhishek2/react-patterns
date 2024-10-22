import React from 'react';
import Heading from './Heading';

export default {
    title: "Components/Heading",
    component: Heading
};


function Default(args) {
    return <Heading {...args}>{args.children}</Heading>
};

const Heading3 = Default.bind({});
Heading3.args = {
    level: 3,
    children: "Hello"
}

export {
    Heading3
}