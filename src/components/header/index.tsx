import { LinksMenu } from "./Links";
import "./styles.css";
import { Logo } from "../logo";
export const Header = () => {
  return (
    <div className="header">
      <Logo />
      <LinksMenu />
    </div>
  );
};
