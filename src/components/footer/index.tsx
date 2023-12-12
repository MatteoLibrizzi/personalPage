import { Contacts } from "../contacts";
import "./styles.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="left-footer">
        <h1 className="logo">logo</h1>
		<h2 className="writing">all rights reserved bla bla</h2>
      </div>
      <Contacts />
    </div>
  );
};
