import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders joseph stalnaker", () => {
  render(<App />);
  const linkElement = screen.getByText(/Joseph Stalnaker/i);
  expect(linkElement).toBeInTheDocument();
});
