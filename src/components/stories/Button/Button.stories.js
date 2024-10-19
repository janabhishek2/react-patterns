import React from 'react';
import Center from '../Center/Center';
import Button from './Button';

export default {
    name: "Button",
    component: Button,
    decorators: [(story) => <Center>{story()}</Center>]
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