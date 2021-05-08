import {render} from '@testing-library/react';
import App from './App';
import {MemoryRouter as Router} from "react-router-dom";
import React from "react";

test('renders', () => {
    // TODO this test is bad and should really be changed
    expect(() => render(<App/>)).not.toThrow();
});
