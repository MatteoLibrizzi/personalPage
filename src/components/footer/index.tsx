import { Contacts } from "../contacts";
import "./styles.css";
import logo from "../../static/logo.jpg";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="left-footer">
        <img className="logo" src={logo} alt="logo" />
        <h2 className="writing">all rights reserved bla bla</h2>
      </div>
      <Contacts />
    </div>
  );
};
