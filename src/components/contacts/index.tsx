import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import "./styles.css";
import { Link } from "react-router-dom";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  MAIL_ADDRESS_URL,
} from "../../others/constants";

export const Contacts = ({ color = 'secondary.dark' }: { color?: string }) => {
  return (
    <div className="contacts icons">
      <Link to={LINKEDIN_URL} target={"_blank"}>
        <LinkedIn sx={{color}}/>
      </Link>
      <Link to={GITHUB_URL} target={"_blank"}>
        <GitHub sx={{color}}/>
      </Link>
      <Link to={MAIL_ADDRESS_URL} target={"_blank"}>
        <Mail sx={{color}}/>
      </Link>
    </div>
  );
};
