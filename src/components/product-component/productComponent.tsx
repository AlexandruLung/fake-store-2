import { CardMedia } from "@material-ui/core";

function SingleProduct(props: any) {
  const { product } = props;

  return (
    <div
      data-testid="SingleProduct"
      key={product ? product.id : product}
      style={{
        position: "absolute",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <CardMedia
        style={{ objectFit: "contain", height: "400px" }}
        component="img"
        height="194"
        src={product ? product.image : product}
        data-testid="image"
      />
      <div style={{ marginLeft: "40px" }}>
        <p
          color="textPrimary"
          style={{ fontSize: "50px", fontStyle: "bolt" }}
          data-testid="title"
        >
          {product ? product.title : product}
          <br></br>
        </p>
        <p data-testid="price" style={{ color: "red", fontSize: "40px" }}>
          {product ? product.price : product}$
        </p>
        <br></br>
        <br></br>
        <p data-testid="description">
          DESCRIPTION: {product ? product.description : product}
        </p>
        <br></br>
        <p data-testid="category">
          CATEGORY: {product ? product.category : product}
        </p>
        <p>RATING: {product?.rating ? product.rating.rate : product?.rating}</p>
      </div>
    </div>
  );
}
export default SingleProduct;
