import { render, screen } from "@testing-library/react";
import ProductPage from "./productPageComponent";
import "@testing-library/jest-dom";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleProduct from "./productComponent";

jest.mock("axios");
const renderedProduct = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
];

test("Should render product page", () => {
  render(
    <BrowserRouter>
      <ProductPage />
    </BrowserRouter>
  );
  const singleProduct = screen.getByTestId("SingleProduct");
  const image = screen.getByTestId("image");

  expect(singleProduct).toBeInTheDocument();
});
test("Should render product component", () => {
  render(
    <BrowserRouter>
      <SingleProduct />
    </BrowserRouter>
  );
  const image = screen.getByTestId("image");
  const title = screen.getByTestId("title");
  const price = screen.getByTestId("price");

  expect(image).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(price).toBeInTheDocument();
});

describe("fetchData", () => {
  it("fetches successfully data from an API", async () => {
    axios.get = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve(renderedProduct));
    render(
      <BrowserRouter>
        <ProductPage />
      </BrowserRouter>
    );

    expect(axios.get).toHaveLength(0);
  });
});

test("Should render product component", () => {
  render(
    <BrowserRouter>
      <SingleProduct />
    </BrowserRouter>
  );
  const image = screen.getByTestId("image");
  const title = screen.getByTestId("title");
  const price = screen.getByTestId("price");

  expect(image).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(price).toBeInTheDocument();
});

test("Should render product component", () => {
  render(
    <BrowserRouter>
      <SingleProduct />
    </BrowserRouter>
  );
  const image = screen.getByTestId("image");
  const title = screen.getByTestId("title");
  const price = screen.getByTestId("price");

  expect(image).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(price).toBeInTheDocument();
});
