import React from 'react';
import Select from '../Select';
import { render } from '@testing-library/react';

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

describe('Select Test cases', () => { 
    test('render the component', () => {
        const { asFragment } = render(<Select options={DEFAULT_COLOR_OPTIONS} label="Select a color" />);
        expect(asFragment()).toMatchSnapshot();
    });
});

