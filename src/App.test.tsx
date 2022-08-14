import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

test("Landing on a bad page", () => {
  const badRoute = "/some/bad/route";
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByTestId("404")).toBeInTheDocument();
});
test("Landing on login", () => {
  const login = "/login";
  render(
    <MemoryRouter initialEntries={[login]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByTestId("loginComponent")).toBeInTheDocument();
});
test("Landing on main page", () => {
  const main = "/";
  render(
    <MemoryRouter initialEntries={[main]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByTestId("mainComponent")).toBeInTheDocument();
});
