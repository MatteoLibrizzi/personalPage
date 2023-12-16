import { Link } from "react-router-dom";
import logo from "../../static/logo.jpg";

export const Logo = () => {
  return (
    <Link to="/">
      <img className="logo" src={logo} alt="logo" />
    </Link>
  );
};
