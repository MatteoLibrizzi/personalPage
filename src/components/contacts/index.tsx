import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import "./styles.css";
import { Link } from "react-router-dom";

export const LINKEDIN_URL =
  "https://www.linkedin.com/in/matteo-librizzi-450465180/";
export const GITHUB_URL = "https://github.com/MatteoLibrizzi";
export const MAIL_ADDRESS_URL = "mailto:librizzimatteo.ml@gmail.com";

export const Contacts = () => {
  return (
    <div className="contacts">
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
