import Select from '@react-patterns/react/src/molecules/Select';
import React from 'react';

export default {
    title: "Components/Select",
    component: Select
};

export const DEFAULT_COLOR_OPTIONS = [
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
    render: (props) => <div>
        <Select {...props} />
        Hello
    </div>,
    args: {
        onOptionSelect: (option, index) => {
            console.log(option, index);
        },
        options: DEFAULT_COLOR_OPTIONS,
        label: "Select a color"
    }
};

const SelectWithRenderOption = {
    render: (props) => <Select {...props} />,
    args: {
        onOptionSelect: (option, index) => {
            console.log(option, index);
        },
        options: DEFAULT_COLOR_OPTIONS,
        label: "Select a color",
        renderOption: function(renderOptionProps) {
            const {
                option,
                isSelected,
                getOptionRecommendedProps = () => ({})
            } = renderOptionProps;
            return <li {...getOptionRecommendedProps()}>{option?.label}</li>
        }
    }
}

export {
    DefaultSelect,
    SelectWithRenderOption
}