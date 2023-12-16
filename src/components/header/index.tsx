import logo from "../../static/logo.jpg";
import { LinksMenu } from "./Links";
import "./styles.css";
export const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo" />
      <LinksMenu />
    </div>
  );
};
