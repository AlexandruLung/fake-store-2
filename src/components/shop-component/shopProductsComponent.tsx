import { Card, CardContent, CardMedia } from "@material-ui/core";

import { useNavigate } from "react-router";

function ShopProducts(props: any) {
  const { productsArray } = props;

  let navigate = useNavigate();

  function redirect(productId: any) {
    if (productId > 20) {
      navigate("/products");
    } else {
      let path = "/product/" + productId;
      navigate(path);
    }
  }

  return productsArray?.map((product: any) => (
    <Card
      data-testid="product"
      key={product ? product.id : product}
      style={{
        width: "400px",
        height: "400px",
        marginRight: "20px",
        marginTop: "20px",
        paddingBottom: "20px",
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        data-testid="image"
        style={{ width: "auto", objectFit: "contain" }}
        onClick={() => redirect(product.id)}
        component="img"
        height="194"
        src={product ? product.image : product}
      />
      <CardContent
        style={{
          width: "300px",
          height: "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <p
          data-testid="title"
          color="textPrimary"
          style={{ fontSize: "15px", marginTop: "40px", marginBottom: "40px" }}
        >
          {product ? product.title : product}
        </p>
        <p data-testid="price" style={{ color: "red", marginTop: "20px" }}>
          PRICE: {product ? product.price : product}$
        </p>
      </CardContent>
    </Card>
  ));
}
export default ShopProducts;
