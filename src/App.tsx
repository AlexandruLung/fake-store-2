import React, { useState } from "react";
import "./App.css";
import { Routes, useRoutes, Navigate } from "react-router";
import ShopComponent from "./components/shop-component/shopComponent";
import ProductPage from "./components/product-component/productPageComponent";
import Login from "./components/login-component/loginComponent";
import Header from "./components/header-component/headerComponent";
import WelcomePage from "./components/welcome-page-component/welcomePageComponent";
import NotFoundException from "./components/exception-component/notFoundExceptionComponent";

function App() {
  const [token, setToken] = useState(undefined);

  const RedirecToLogin = () =>
    useRoutes([
      { path: "/login", element: <Login setToken={setToken} /> },
      { path: "/product/:productId", element: <Navigate to="/login" /> },
      { path: "/products", element: <Navigate to="/login" /> },
      { path: "/", element: <WelcomePage /> },
      {
        path: "*",
        element: <NotFoundException setToken={setToken} />,
      },
    ]);
  const RedirectToProducts = () =>
    useRoutes([
      { path: "/login", element: <Login setToken={setToken} /> },
      { path: "/product/:productId", element: <ProductPage /> },
      { path: "/products", element: <ShopComponent /> },
      { path: "/", element: <Navigate to="/products" /> },
      {
        path: "*",
        element: <NotFoundException setToken={setToken} />,
      },
    ]);
  if (!localStorage.getItem("token")) {
    return (
      <div>
        <Header setToken={setToken} />
        <Routes></Routes>

        <RedirecToLogin />
      </div>
    );
  } else {
    return (
      <div>
        <Header setToken={setToken} />
        <Routes></Routes>
        <RedirectToProducts />
      </div>
    );
  }
}

export default App;
