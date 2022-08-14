import {
  Container,
  CssBaseline,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
} from "@material-ui/core";
import SendIcon from "@mui/icons-material/Send";
import FakeStoreImage from "../../Resources/images/dragonu_rosu.png";
import React from "react";
import { useNavigate } from "react-router";
import UserServices from "../../services/userServices";
import "./loginComponent.css";

function Login(props: any) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = React.useState("");
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    try {
      await UserServices.login(data.get("username"), data.get("password")).then(
        (res) => {
          let token = res.token;

          localStorage.setItem("token", JSON.stringify(token));
          props.setToken(token);
          navigate("/products");
        }
      );
    } catch (e) {
      setErrorMessage("Wrong username or password.");
    }
  };
  return (
    <div className="backgroundLogin" data-testid="loginComponent">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              alt="Dragonu rosu"
              style={{ width: "300px" }}
              src={FakeStoreImage}
              data-testid="image"
            ></img>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                data-testid="username"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                data-testid="password"
              />
              <Grid>
                <Typography color={"error"}>{errorMessage}</Typography>
              </Grid>
              <br></br>

              <Button
                type="submit"
                style={{ background: "transparent", marginLeft: "140px" }}
                variant="contained"
                endIcon={<SendIcon style={{ marginRight: "5px" }} />}
                data-testid="signIn"
              >
                Sign in
              </Button>
            </Box>
          </div>
        </Box>
      </Container>
    </div>
  );
}
export default Login;
