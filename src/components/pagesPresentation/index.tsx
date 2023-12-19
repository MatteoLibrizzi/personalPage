import {
  BLOG_LINK,
  PERSONAL_BLOG_SUFFIX,
  TECH_BLOG_SUFFIX,
  WORK_WITH_ME_LINK,
} from "../../others/constants";
import { LinksItem } from "../header/LinksItem";
import { InfoItem } from "../infoItem";
import "./styles.css";

export const PagesPresentation = () => {
  return (
    <div className="flex-col-center">
      <h1>About this website:</h1>
      <div className="pages-presentation row-big-col-small">
        <InfoItem
          textElement={
            <p className="short-p-style">
              If you want to learn more about my travels and personal life,
              visit my personal blog
            </p>
          }
        >
          <LinksItem
            to={`${BLOG_LINK}/${PERSONAL_BLOG_SUFFIX}`}
            content={"Personal Blog"}
          />
        </InfoItem>
        <InfoItem
          textElement={
            <p className="short-p-style">
              If you want to learn more about my coding experience, visit my
              tech blog
            </p>
          }
        >
          <LinksItem
            to={`${BLOG_LINK}/${TECH_BLOG_SUFFIX}`}
            content="Tech Blog"
          />
        </InfoItem>
        <InfoItem
          textElement={
            <p className="short-p-style">
              If you might be interested in working with me, visit my
              professional infomation page
            </p>
          }
        >
          <LinksItem to={WORK_WITH_ME_LINK} content="Work With Me" />
        </InfoItem>
      </div>
    </div>
  );
};
