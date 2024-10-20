import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

export default {
    title: "ChakraButton",
    component: ChakraButton
};

const Template = (args) => <ChakraButton {...args} />;

const TealButton = Template.bind({});
TealButton.args = {
    colorScheme: "teal",
    children: "Teal Button"
};

const RedButton = Template.bind({});
RedButton.args = {
    colorScheme: "red",
    children: "Red button"
}

export { TealButton, RedButton };