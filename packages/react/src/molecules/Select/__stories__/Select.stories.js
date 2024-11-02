import React from 'react';
import Select from '../Select';

export default {
    title: "Molecules/Select",
    component: Select
};

let DEFAULT_COLOR_OPTIONS = [
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

const SelectWithOptions = {
    render: (props) => <Select {...props} />,
    args: {
        options:DEFAULT_COLOR_OPTIONS,
        label: "Select a color ?"
    }
};

export {
    SelectWithOptions
};
