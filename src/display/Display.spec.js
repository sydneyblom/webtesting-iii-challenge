import React from "react";
import {render} from '@testing-library/react';
import Display from "../display/Display";

test("Display should match snapshot", () => {
  expect(render(<Display />)).toMatchSnapshot();
});

//red
test("should display red when locked", () => {
  const { getByText } = render(<Display closed={true} locked={true} />);
  getByText(/locked/i);
});

//green unlocked
test("should display green when unlocked", () => {
  const { getByText } = render(<Display closed={true} locked={false} />);
  getByText(/unlocked/i);
});

//red closed
test("should display red class when closed", () => {
  const { getByText } = render(<Display closed={true} locked={false} />);
  expect(getByText(/closed/i).classList.contains("red-led")).toBe(true);
});

//green closed
test("should display green class when open", () => {
  const { getByText } = render(<Display closed={false} locked={false} />);
  expect(getByText(/open/i).classList.contains("green-led")).toBe(true);
});
