import { Button } from "@material-ui/core";
import { useNavigate } from "react-router";
import dog from "../../Resources/images/dog.gif";

function NotFoundException(props: any) {
  const navigate = useNavigate();
  function verifyUserLogedIn() {
    if (!localStorage.getItem("token")) {
      console.log(localStorage.getItem("token"));
      localStorage.removeItem("token");
      navigate("/login");
    } else {
      console.log("products");
      navigate("/products");
    }
  }
  return (
    <div
      data-testid="404"
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <img
        alt="Dogo"
        style={{ marginTop: "300px", width: "200px" }}
        src={dog}
        data-testid="image"
      ></img>
      <p style={{ fontSize: "70px", color: "red" }} data-testid="error">
        404 NOT FOUND
      </p>

      <p data-testid="question"> How did you get here?</p>
      <Button
        variant="outlined"
        size="medium"
        aria-label=""
        color="secondary"
        onClick={verifyUserLogedIn}
        data-testid="button"
      >
        back to normal
      </Button>
    </div>
  );
}
export default NotFoundException;
