import { Link } from "react-router-dom";
import logo from "../../static/logo.jpg";

export const Logo = () => {
  return (
    <Link to="/">
      <img
        className="logo"
        style={{ width: 50, height: 50 }}
        src={logo}
        alt="logo"
      />
    </Link>
  );
};
