import { MenuItem, Select, TextField } from "@material-ui/core";
import React from "react";

import ShopProducts from "./shopProductsComponent";
import "./shopComponent.css";
import FakeStoreImage from "../../Resources/images/dragonu_rosu.png";
import ProductServices from "../../services/productServices";

function ShopComponent() {
  const [errorMessage, setErrorMessage] = React.useState("");
  const [productsArray, setProductsArray] = React.useState([]);
  const [productsArrayCopy, setProductsArrayCopy] = React.useState([]);
  const [productCategory, setProductCategory] = React.useState("title");
  const [productSort, setProductSort] = React.useState("priceAscending");
  const [searchResults, setSearchResults] = React.useState(true);
  let productService = new ProductServices();

  const handleSearchFilter = (event: any) =>
    setProductCategory(event.target.value);

  const handleSortingFilter = (event: any) =>
    setProductSort(event.target.value);

  const getProducts = async function () {
    try {
      let shop = await productService.getAllProducts();
      setProductsArray(shop);
      setProductsArrayCopy(shop);
    } catch (e) {
      setErrorMessage("Data could not load");
    }
  };

  function getSortedProducts(type: any) {
    let sortedProductList = [...productsArrayCopy];
    console.log(sortedProductList);
    if (type === "priceAscending") {
      sortedProductList.sort((a: any, b: any) => (a.price > b.price ? 1 : -1));
    }
    if (type === "priceDescending") {
      sortedProductList.sort((a: any, b: any) => (a.price < b.price ? 1 : -1));
    }
    if (type === "titleAscending") {
      sortedProductList.sort((a: any, b: any) => (a.title > b.title ? 1 : -1));
    }
    if (type === "titleDescending") {
      sortedProductList.sort((a: any, b: any) => (a.title < b.title ? 1 : -1));
    }
    setProductsArrayCopy(sortedProductList);
  }
  function getCategory(category: string) {
    if (category === "title") {
      setProductCategory("title");
      return "title";
    } else {
      setProductCategory("category");
      return "category";
    }
  }
  function search(search: string, category: string) {
    let searchProducts = [...productsArray];
    console.log(productCategory);

    if (productCategory === "title") {
      searchProducts = searchProducts.filter((product: any) =>
        product.title.toLowerCase().includes(search)
      );
      if (searchProducts.length === 0) {
        console.log("nu mai e");
        setErrorMessage(search);
        setSearchResults(false);
      } else {
        setSearchResults(true);
      }
    }
    if (productCategory === "category") {
      searchProducts = searchProducts.filter((product: any) =>
        product.category.toLowerCase().includes(search)
      );
      if (searchProducts.length === 0) {
        console.log("nu mai e");
        setErrorMessage(search);
        setSearchResults(false);
      } else {
        setSearchResults(true);
      }
    }

    setProductsArrayCopy(searchProducts);
  }

  React.useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="backgroundShop" data-testid="shopComponent">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginRight: "50px",
        }}
      >
        <TextField
          data-testid="search"
          id="standard-basic"
          label="Shearch..."
          variant="standard"
          style={{ width: "500px" }}
          onChange={(e: any) => search(e.target.value, "")}
        />

        <Select
          data-testid="category"
          value="title"
          style={{ marginTop: "15px" }}
          onChange={handleSearchFilter}
        >
          <MenuItem value={"title"} onClick={() => getCategory("title")}>
            Title
          </MenuItem>
          <MenuItem value={"category"} onClick={() => getCategory("category")}>
            Category
          </MenuItem>
        </Select>
      </div>
      <Select
        data-testid="sort"
        value={productSort}
        style={{ marginLeft: "100px" }}
        onChange={handleSortingFilter}
      >
        <MenuItem
          value={"priceAscending"}
          onClick={() => getSortedProducts("priceAscending")}
        >
          Price 0-100
        </MenuItem>
        <MenuItem
          value={"priceDescending"}
          onClick={() => getSortedProducts("priceDescending")}
        >
          Price 100-0
        </MenuItem>
        <MenuItem
          value={"titleAscending"}
          onClick={() => getSortedProducts("titleAscending")}
        >
          Name A-Z
        </MenuItem>
        <MenuItem
          value={"titleDescending"}
          onClick={() => getSortedProducts("titleDescending")}
        >
          Name Z-A
        </MenuItem>
      </Select>
      {searchResults ? (
        <div className={"productsDisplayFlex"}>
          <ShopProducts productsArray={productsArrayCopy} />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "500px",
            marginLeft: "700px",
            maxWidth: "500px",
          }}
        >
          <img
            alt="Dragonu Rosu"
            style={{ width: "300px", marginTop: "100px" }}
            src={FakeStoreImage}
            data-testid="image"
          ></img>
          <p
            style={{
              color: "red",
              font: "caption",
              fontSize: "50px",
              width: "500px",
              height: "auto",
            }}
          >
            Zero results for: {errorMessage}
          </p>
        </div>
      )}
    </div>
  );
}
export default ShopComponent;
