import {
  BLOG_LINK,
  PERSONAL_BLOG_SUFFIX,
  TECH_BLOG_SUFFIX,
  WORK_WITH_ME_LINK,
} from "../../others/constants";
import { LinksItem } from "./LinksItem";

export const LinksMenu = () => {
  return (
    <div className="links flex-row-center">
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        <LinksItem
          to={`${BLOG_LINK}/${PERSONAL_BLOG_SUFFIX}`}
          content={"Personal Blog"}
        />
        <LinksItem
          to={`${BLOG_LINK}/${TECH_BLOG_SUFFIX}`}
          content="Tech Blog"
        />
        <LinksItem to={WORK_WITH_ME_LINK} content="Work With Me" />
      </ul>
    </div>
  );
};
