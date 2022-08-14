import { cleanup, render, screen } from "@testing-library/react";
import React, { useState } from "react";
import Header from "./headerComponent";
import "@testing-library/jest-dom";

import { BrowserRouter } from "react-router-dom";

test("Should render main", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const homeIcon = screen.getByTestId("homeIcon");
  const loginIcon = screen.getByTestId("loginIcon");

  expect(homeIcon).toBeInTheDocument();
  expect(loginIcon).toBeInTheDocument();
});
