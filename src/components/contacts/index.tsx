import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import "./styles.css";
import { Link } from "react-router-dom";
import { GITHUB_URL, LINKEDIN_URL, MAIL_ADDRESS_URL } from "../../others/constants";


export const Contacts = () => {
  return (
    <div className="contacts icons">
      <Link to={LINKEDIN_URL}>
        <LinkedIn />
      </Link>
      <Link to={GITHUB_URL}>
        <GitHub />
      </Link>
      <Link to={MAIL_ADDRESS_URL}>
        <Mail />
      </Link>
    </div>
  );
};
