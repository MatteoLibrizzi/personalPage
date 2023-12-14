import { Link } from "react-router-dom";
import { useBlogPostImage } from "../../hooks/useBlogPostImagesContent";
import "./styles.css";

interface BlogPostItemProps {
  posts3Key: string;
  url: string;
}

const getPostImageKeyFromTitle = (title: string) => {
  const titleParts = title.split("__");
  const imageKey = titleParts[0] + ".jpg";
  return imageKey;
};

export const BlogPostItem = (props: BlogPostItemProps) => {
  const { posts3Key, url } = props;

  const s3KeyParts = posts3Key.split("__");

  const imageKey = getPostImageKeyFromTitle(posts3Key);

  const date = s3KeyParts[0];
  const displayTitle = s3KeyParts[1];

  const { data: image } = useBlogPostImage(url, imageKey);

  const ImageComponent = () =>
    image ? (
      <img src={image} alt={displayTitle} width={400} height={400} />
    ) : (
      <></>
    );

  return (
    <div className="blog-post-item flex-row-center">
      <ImageComponent />
      <Link to={`/blog/post/${posts3Key}`}>{displayTitle + ' '+ date}</Link>
    </div>
  );
};
