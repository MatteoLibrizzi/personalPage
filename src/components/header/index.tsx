import "./styles.css";
import logo from "../../static/logo.jpg";
import { Links } from "./Links";
export const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo" />
      <Links />
    </div>
  );
};
