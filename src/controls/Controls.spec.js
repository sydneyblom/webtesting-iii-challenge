import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Controls from "./Controls";

//snapshot

test("should match snapshot", () => {
  expect(render(<Controls />)).toMatchSnapshot();
});

test("should render button to toggle closed/locked states", () => {
  const { getByText } = render(<Controls />);
  getByText(/lock gate/i);
  getByText(/close gate/i);
});

test("should disable locked toggle button if gate is locked", () => {
  const { getByText } = render(<Controls locked={true} />);
  expect(getByText(/close gate/i).disabled).toBe(true);
});

test("should disable locked toggle if gate is open", () => {
  const { getByText } = render(<Controls closed={false} />);
  expect(getByText(/lock gate/i).disabled).toBe(true);
});

test("should toggle closed on button click", () => {
    // mock
  const toggleClosed = jest.fn(); 
  const { getByText } = render(<Controls toggleClosed={toggleClosed} />);

  const closedButton = getByText(/close gate/i);
  fireEvent.click(closedButton);

  expect(toggleClosed).toHaveBeenCalled();
});
