// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';
import Display from '../display/Display';
import Controls from '../controls/Controls';



test('cannot be closed or opened if it is locked', () => {


    const { getByText } = render(<Dashboard />, <Controls />, <Display />);
    const CloseGateButton = getByText(/Close Gate/i);
    fireEvent.click(CloseGateButton);

    getByText(/Open Gate/i)
    // const buttonLockGate = getByText(/Lock Gate/i);
    // fireEvent.click(buttonLockGate);

    // expect(getByText(/Unlock Gate/i)).toBeDefined();

});



