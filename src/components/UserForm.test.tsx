import { render, screen } from "@testing-library/react";

import { composeStory } from "@storybook/react";

import Meta, { Default } from "./UserForm.stories";

const FormOK = composeStory(Default, Meta);

test("Validates form", () => {
  render(<FormOK />);

  const buttonElement = screen.getByRole("button", {
    name: "Submit",
  });
  expect(buttonElement).toBeInTheDocument();
});
