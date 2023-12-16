import { Contacts } from "../contacts";
import "./styles.css";
import { Logo } from "../logo";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="left-footer">
        <Logo />
        <p className="writing" style={{color: 'gray'}}>All rights reserved</p>
      </div>
      <Contacts />
    </div>
  );
};
