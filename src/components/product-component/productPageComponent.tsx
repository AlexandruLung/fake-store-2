import React from "react";
import { useNavigate, useParams } from "react-router";
import ProductServices from "../../services/productServices";
import NotFoundException from "../exception-component/notFoundExceptionComponent";
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
    <div>
      {!errorMessage ? (
        <SingleProduct product={product} data-testid="SingleProduct" />
      ) : (
        <NotFoundException></NotFoundException>
      )}
    </div>
  );
}
export default ProductPage;
