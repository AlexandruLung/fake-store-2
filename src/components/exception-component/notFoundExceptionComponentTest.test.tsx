import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import NotFoundException from "./notFoundExceptionComponent";

test("Should render 404 page", () => {
  render(
    <BrowserRouter>
      <NotFoundException />
    </BrowserRouter>
  );
  const button = screen.getByTestId("button");
  const error = screen.getByTestId("error");
  const image = screen.getByTestId("image");
  const question = screen.getByTestId("question");

  expect(button).toBeInTheDocument();
  expect(error).toBeInTheDocument();
  expect(image).toBeInTheDocument();
  expect(question).toBeInTheDocument();
});
