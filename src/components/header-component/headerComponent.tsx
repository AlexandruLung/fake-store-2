import { IconButton } from "@material-ui/core";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router";
import "./headerComponent.css";

function Header(props: any) {
  const navigate = useNavigate();
  const toHomePage = () => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    } else {
      navigate("/products");
    }
  };
  const toLogin = () => {
    props.setToken(undefined);
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (!localStorage.getItem("token")) {
    return (
      <div className="backgroundHeader">
        <IconButton
          size="medium"
          aria-label=""
          onClick={toHomePage}
          data-testid="homeIcon"
        >
          <HomeIcon />
        </IconButton>
        <IconButton
          size="medium"
          aria-label=""
          onClick={toLogin}
          data-testid="loginIcon"
        >
          <LoginIcon />
        </IconButton>
      </div>
    );
  } else {
    return (
      <div className="backgroundHeader">
        <IconButton size="medium" aria-label="" onClick={toHomePage}>
          <HomeIcon />
        </IconButton>
        <IconButton size="medium" aria-label="" onClick={toLogin}>
          <LogoutIcon />
        </IconButton>
      </div>
    );
  }
}
export default Header;
