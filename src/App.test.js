import { render, screen, fireEvent } from "@testing-library/react";
import App, { relpaceCamelWithSpaces } from "./App";

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
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

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

test("button has color gray if disabled", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  // by checking the checkbox the button became disabled and the background color became gray
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

  // by uncheckung the checkbox the botton became enabled turn to have background of red
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // by clicking the button, the background color became blue, and checking the checkbox the button became disabled with a background color of grey
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
});

describe("spaces before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(relpaceCamelWithSpaces("Red")).toBe("Red");
  });

  test("Wrks for one inner capital letters", () => {
    expect(relpaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Worsk for multiple inner capital letters", () => {
    expect(relpaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
