import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Dashboard from '../dashboard/Dashboard';
import Display from '../display/Display';
import Controls from '../controls/Controls';


test('shows the controls', () => {
    const { getByTestId } = render(<Controls />);
    getByTestId(/mainControls/i);
});



test('provide buttons to toggle the closed and locked states.', () => {
    const { getByTestId } = render(<Controls />);


    getByTestId(/controlsClose/i);
    getByTestId(/controlsLock/i);
});

test(' text changes to reflect the state the door will be in if clicked', () => {

    const { getByText } = render(<Dashboard />, <Controls />, <Display />);

    const CloseGateButton = getByText(/Close Gate/i);
    fireEvent.click(CloseGateButton);

    getByText(/Open Gate/i);

});

test('the locked toggle button is disabled if the gate is open', () => {

    const { getByText, getByTestId } = render(<Dashboard />, <Controls />, <Display />);

    expect(getByTestId('controlsClose').disabled).toBe(true)



});


test('the closed toggle button is disabled if the gate is locked', () => {

    const { getByText, getByTestId } = render(<Dashboard />, <Controls />, <Display />);


    const CloseGateButton = getByText(/Close Gate/i);
    fireEvent.click(CloseGateButton);



    const buttonLockGate = getByText(/Lock Gate/i);
    fireEvent.click(buttonLockGate);

    expect(getByTestId('controlsLock').disabled).toBe(true)

});



