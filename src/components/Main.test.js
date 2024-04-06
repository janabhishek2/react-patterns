import React from 'react';
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react';
import Main from './Main';

test('Render main component', () => {
    render(<Main />);
    const elements = screen.getAllByText(/^learn/i);
    expect(elements.length).toBe(3);
});
