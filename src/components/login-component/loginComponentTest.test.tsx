import { render, screen } from "@testing-library/react";
import Login from "./loginComponent";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

test("Should render login", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const image = screen.getByTestId("image");
  const username = screen.getByTestId("username");
  const password = screen.getByTestId("password");
  const signIn = screen.getByTestId("signIn");
  expect(image).toBeInTheDocument();
  expect(username).toBeInTheDocument();
  expect(password).toBeInTheDocument();
  expect(signIn).toBeInTheDocument();
});
