import { useResolvedPath } from "react-router-dom";
import { useBlogPostContent } from "../../hooks/useBlogPostContent";
import ReactMarkdown from "react-markdown";
import "./styles.css";

export const BlogPost = (props: any) => {
  const splitUrl = useResolvedPath("").pathname.split("/");
  const postTitle = splitUrl[splitUrl.length - 1];

  const { data: postContent, loading, error } = useBlogPostContent(postTitle);

  return (
    <div className="blog-post flex-col-center">
      {loading && <div>Loading...</div>}
      {error && <div>Error</div>}
      <ReactMarkdown>{postContent}</ReactMarkdown>
    </div>
  );
};
