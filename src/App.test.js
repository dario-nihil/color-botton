import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color, and updates when clicked", () => {
  render(<App />);

  // find an element with role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  // expect the button text to be 'Change to red'
  expect(colorButton).toHaveTextContent("Change to red");
});

test("initial conditions", () => {
  render(<App />);
  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("button switch from disabled/enabled when checkbox is checked/unchecked", () => {
  render(<App />);

  const colorButton = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox");

  // initially the check box is unchecked and button should be enabled
  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();

  // when checkbox is clicked to change to be checked the button should be disabled
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();

  // when checkbox is clicked to change to be unchecked the button should be enabled
  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();
});
