import { Link } from "react-router-dom";

interface BlogPostItemProps {
  s3Key: string;
}

export const BlogPostItem = (props: BlogPostItemProps) => {
  const { s3Key } = props;
  const displayTitle = s3Key.split("__")[1];
  return (
    <div className="blog-post-item">
      <Link to={`/blog/post/${s3Key}`}>{displayTitle}</Link>
    </div>
  );
};
