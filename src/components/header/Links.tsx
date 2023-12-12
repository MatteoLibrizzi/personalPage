import { Link } from "react-router-dom";
import { BLOG_LINK, PERSONAL_BLOG_SUFFIX, TECH_BLOG_SUFFIX, WORK_WITH_ME_LINK } from "../../others/constants";

export const Links = () => {
  return (
    <div className="links">
      <Link className="link" to={`${BLOG_LINK}/${PERSONAL_BLOG_SUFFIX}`}>
        <h4>Personal Blog</h4>
      </Link>
      <Link className="link" to={`${BLOG_LINK}/${TECH_BLOG_SUFFIX}`}>
        <h4>Tech Blog</h4>
      </Link>
      <Link className="link" to={WORK_WITH_ME_LINK}>
        <h4>Work With Me</h4>
      </Link>
    </div>
  );
};
