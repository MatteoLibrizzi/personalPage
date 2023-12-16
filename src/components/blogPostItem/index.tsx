import { Link } from "react-router-dom";
import { useBlogPostImage } from "../../hooks/useBlogPostImagesContent";
import { FancyBox } from "../fancyBox";
import "./styles.css";

interface BlogPostItemProps {
  posts3Key: string;
  url: string;
  blogType: string;
}

const getPostImageKeyFromTitle = (title: string) => {
  const titleParts = title.split("__");
  const imageKey = titleParts[0] + ".jpg";
  return imageKey;
};

export const BlogPostItem = (props: BlogPostItemProps) => {
  const { posts3Key, url, blogType } = props;

  const s3KeyParts = posts3Key.split("__");

  const imageKey = getPostImageKeyFromTitle(posts3Key);

  const date = s3KeyParts[0];
  const displayTitle = s3KeyParts[1].replaceAll("_", " ");

  const { data: image } = useBlogPostImage(url, imageKey);

  return (
    <div className="blog-post-item">
      {image && (
        <img
          src={image}
          alt={displayTitle}
          style={{
            maxWidth: "150px",
            maxHeight: "200px",
            paddingRight: "10vw",
          }}
        />
      )}
      <FancyBox>
        <div className="flex-col-center" style={{ padding: "5vh" }}>
          <Link
            to={`/blog/post/${blogType}/${posts3Key}`}
            style={{ textDecoration: "none" }}
          >
            <h3 style={{ color: "black" }}>{displayTitle}</h3>
          </Link>
          <p style={{ color: "gray" }}>{date}</p>
        </div>
      </FancyBox>
    </div>
  );
};
