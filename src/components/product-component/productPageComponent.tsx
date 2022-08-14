import React from "react";
import { useParams } from "react-router";
import ProductServices from "../../services/productServices";
import SingleProduct from "./productComponent";
import "./productPageComponent.css";

function ProductPage(props: any) {
  const { productId } = useParams();
  const [errorMessage, setErrorMessage] = React.useState("");
  const [product, setProductsArray] = React.useState([]);
  let productService = new ProductServices();

  const getProducts = async function () {
    try {
      let shop = await productService.getSingleProduct(productId);
      console.log(shop.rating.rate);
      setProductsArray(shop);
    } catch (e) {
      setErrorMessage("Data could not load");
    }
  };
  React.useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="backgroundProductPage">
      <SingleProduct product={product} data-testid="SingleProduct" />
    </div>
  );
}
export default ProductPage;
