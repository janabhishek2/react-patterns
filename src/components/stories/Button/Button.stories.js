import React from 'react';
import Button from './Button';

export default {
    name: "Button",
    component: Button
};

const Template = (args) => <Button {...args} />;

const Primary = Template.bind({});
Primary.args = {
    variant: "primary",
    children: "Primary Label"
};

const Secondary = Template.bind({});
Secondary.args = {
    variant: "secondary",
    children: "Secondary label"
};

const Tertiary = Template.bind({});
Tertiary.args = {
    ...Primary.args,
    children: "Tertiary"
};

export {
    Primary, Secondary, Tertiary
}