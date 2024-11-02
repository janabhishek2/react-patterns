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
    test('render the component snapshot', () => {
        const { asFragment } = render(<Select options={DEFAULT_COLOR_OPTIONS} label="Select a color" />);
        expect(asFragment()).toMatchSnapshot();
    });
    test('after clicking the button, should display the correct number of options', () => {
        const { asFragment, getByTestId, getAllByRole } = render(<Select options={DEFAULT_COLOR_OPTIONS} label="Select a color" />);
        
        // Click the trigger
        fireEvent.click(getByTestId("selectButtonTrigger"));

        // Expect "role="menuitemradio"" to have length 3
        expect(getAllByRole("menuitemradio")).toHaveLength(3);
        expect(asFragment()).toMatchSnapshot();
    });

    test('should call "onOptionSelect" with option and index if passed', () => {
        const optionSelectMock = jest.fn();
        const { asFragment, getByTestId, getAllByRole } = render(<Select options={DEFAULT_COLOR_OPTIONS} label="Select a color" onOptionSelect={optionSelectMock}/>);
    
         // Click the trigger
         fireEvent.click(getByTestId("selectButtonTrigger"));

        //  Select a color ex pink

        fireEvent.click(getAllByRole("menuitemradio")[0]);

        expect(optionSelectMock).toHaveBeenCalled();
        expect(optionSelectMock).toHaveBeenCalledWith(DEFAULT_COLOR_OPTIONS[0], 0);
    })
});

