import Select from '@react-patterns/react/src/molecules/Select';
import React from 'react';

export default {
    title: "Components/Select",
    component: Select
};

const DEFAULT_COLOR_OPTIONS = [
    {
        label: "Pink",
        value: "Pink"
    },
    {
        label: "Green",
        value: "Green"
    },
    {
        label: "Orange",
        value: "Orange"
    }
]

const DefaultSelect = {
    render: (props) => <Select {...props} />,
    args: {
        onOptionSelect: (option, index) => {
            console.log(option, index);
        },
        options: DEFAULT_COLOR_OPTIONS,
        label: "Select a color"
    }
};

export {
    DefaultSelect
}