import { Link } from "react-router-dom";
import { BLOG_LINK, PERSONAL_BLOG_SUFFIX, TECH_BLOG_SUFFIX, WORK_WITH_ME_LINK } from "../../others/constants";
import { InfoItem } from "../infoItem";
import "./styles.css";



export const PagesPresentation = () => {
  return (
    <div className="pages-presentation row-big-col-small">
      <InfoItem textElement={<h1 className="info-item">info 1</h1>}>
        <Link className="link" to={`${BLOG_LINK}/${PERSONAL_BLOG_SUFFIX}`}>
          <h4>Personal Blog</h4>
        </Link>
      </InfoItem>
      <InfoItem textElement={<h1 className="info-item">info 1</h1>}>
        <Link className="link" to={`${BLOG_LINK}/${TECH_BLOG_SUFFIX}`}>
          <h4>Tech Blog</h4>
        </Link>
      </InfoItem>
      <InfoItem textElement={<h1 className="info-item">info 1</h1>}>
        <Link className="link" to={WORK_WITH_ME_LINK}>
          <h4>Work With Me</h4>
        </Link>
      </InfoItem>
    </div>
  );
};
