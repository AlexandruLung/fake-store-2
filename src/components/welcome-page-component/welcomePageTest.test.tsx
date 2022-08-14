import { render, screen } from "@testing-library/react";
import WelcomePage from "./welcomePageComponent";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

test("Should render welcome page", () => {
  render(
    <BrowserRouter>
      <WelcomePage />
    </BrowserRouter>
  );
  const image = screen.getByTestId("image");
  const title = screen.getByTestId("title");

  expect(image).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});
