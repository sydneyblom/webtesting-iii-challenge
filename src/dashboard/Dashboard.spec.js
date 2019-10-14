
import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../dashboard/Dashboard';


test('dashboard renders without crashing', () => {
    render(<Dashboard />);
  });
  
  test('should match snapshot', () => {
    expect(render(<Dashboard />)).toMatchSnapshot();
  });
  

  
  test('controls & display rendering', () => {
    const {getByText} = render(<Dashboard />);
      getByText(/unlocked/i);
      getByText(/open/i);
      getByText(/lock gate/i);
      getByText(/close gate/i);
  });
