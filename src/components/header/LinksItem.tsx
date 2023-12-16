import { Button } from "@mui/material";
import { Link } from "react-router-dom";

type LinksItemProps = {
  to: string;
  content: string;
};
export const LinksItem = ({ to, content }: LinksItemProps) => {
  return (
    <Link className="link menu-item" to={to}>
      <Button
        onClick={() => {
          const menuToggle = document.getElementById("menu-toggle");
          if (window.innerWidth <= 700) {
            menuToggle?.click();
          }
        }}
      >
        <p className="link-text">{content}</p>
      </Button>
    </Link>
  );
};
