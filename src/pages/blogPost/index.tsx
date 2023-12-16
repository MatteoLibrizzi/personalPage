import { useResolvedPath } from "react-router-dom";
import { useBlogPostContent } from "../../hooks/useBlogPostContent";
import ReactMarkdown from "react-markdown";
import "./styles.css";
import { url } from "inspector";
import { PERSONAL_BLOG_API_URL, TECH_BLOG_API_URL } from "../../others/constants";

type BlogPostProps = {
  url: string;
};
const BlogPost = (props: BlogPostProps) => {
  const { url } = props;
  const splitUrl = useResolvedPath("").pathname.split("/");
  const postTitle = splitUrl[splitUrl.length - 1];

  const {
    data: postContent,
    loading,
    error,
  } = useBlogPostContent({ url, s3Key: postTitle });

  return (
    <div className="blog-post flex-col-center">
      {loading && <div>Loading...</div>}
      {error && <div>Error</div>}
      <ReactMarkdown>{postContent}</ReactMarkdown>
    </div>
  );
};

export const BlogPostPersonal = () => {
  return <BlogPost url={PERSONAL_BLOG_API_URL} />;
}

export const BlogPostTech = () => {
  return <BlogPost url={TECH_BLOG_API_URL} />;
}