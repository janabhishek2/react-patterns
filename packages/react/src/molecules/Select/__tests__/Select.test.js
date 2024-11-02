import React from 'react';
import Select from '../Select';
import { fireEvent, render } from '@testing-library/react';

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
    test('render the component and display options - after clicking the button', () => {
        const { asFragment, getByTestId, getAllByRole } = render(<Select options={DEFAULT_COLOR_OPTIONS} label="Select a color" />);
        
        // Click the trigger
        fireEvent.click(getByTestId("selectButtonTrigger"));

        // Expect "role="menuitemradio"" to have length 3
        expect(getAllByRole("menuitemradio")).toHaveLength(3);
        expect(asFragment()).toMatchSnapshot();
    });
});

