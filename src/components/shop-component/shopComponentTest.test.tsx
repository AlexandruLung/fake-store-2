import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ShopComponent from "./shopComponent";
import "@testing-library/jest-dom";

test("Should render product component", () => {
  render(
    <BrowserRouter>
      <ShopComponent />
    </BrowserRouter>
  );
  const search = screen.getByTestId("search");
  const category = screen.getByTestId("category");
  const sort = screen.getByTestId("sort");

  expect(search).toBeInTheDocument();
  expect(category).toBeInTheDocument();
  expect(sort).toBeInTheDocument();
});
