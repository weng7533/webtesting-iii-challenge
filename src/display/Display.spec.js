// Test away!
import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Display from './Display';
import Dashboard from '../dashboard/Dashboard';

import Controls from '../controls/Controls';


//Gate 

test('displays if gate is open/closed and if it is locked/unlocked;displays Closed if the closed prop is true and Open if otherwise; displays Locke if the locked prop is true and Unlocked if otherwise', () => {
    const { getByText } = render(<Dashboard />, <Controls />, <Display />);

    getByText(/Unlocked/i);
    getByText(/Open/i);


    const CloseGateButton = getByText(/Close Gate/i);
    fireEvent.click(CloseGateButton);
    getByText(/Closed/i);

    const buttonLockGate = getByText(/Lock Gate/i);
    fireEvent.click(buttonLockGate);
    getByText(/Locked/i);

});


test('shows the Display', () => {
    const { getByTestId } = render(<Display />);
    getByTestId(/display/i);
});




test('when unlocked or open use the green-led class', () => {
    const { getByText, getByTestId } = render(<Dashboard />, <Controls />, <Display />);



    expect(getByTestId('Left').classList.contains('green-led')).toBe(true)
    expect(getByTestId('Right').classList.contains('green-led')).toBe(true)

});





