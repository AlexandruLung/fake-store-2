import FakeStoreImage from "../../Resources/images/dragonu_rosu.png";

import { useNavigate } from "react-router-dom";
import "./welcomePageComponent.css";

function WelcomePage(props: any) {
  const navigate = useNavigate();
  const login = () => {
    let path = `/login`;
    navigate(path);
  };
  return (
    <div className="background" onClick={login} data-testid="mainComponent">
      <h1 className="title" data-testid="title">
        DRAGONU ROSU
      </h1>
      <img alt="Dragonu Rosu" src={FakeStoreImage} data-testid="image"></img>
    </div>
  );
}
export default WelcomePage;
