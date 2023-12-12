import { Link } from "react-router-dom";
import { InfoItem } from "../infoItem";
import "./styles.css";

export const PagesPresentation = () => {
  return (
    <div className="pages-presentation">
      <InfoItem textElement={<h1 className="info-item">info 1</h1>}>
        <Link className="link" to="/personalBlog">
          <h4>Personal Blog</h4>
        </Link>
      </InfoItem>
      <InfoItem textElement={<h1 className="info-item">info 1</h1>}>
        <Link className="link" to="/techBlog">
          <h4>Tech Blog</h4>
        </Link>
      </InfoItem>
      <InfoItem textElement={<h1 className="info-item">info 1</h1>}>
        <Link className="link" to="/workWithMe">
          <h4>Work With Me</h4>
        </Link>
      </InfoItem>
    </div>
  );
};
