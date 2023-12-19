import { CircularProgress } from "@mui/material";
import { useBlogPostsTitles } from "../../hooks/useBlogPostsTitles";
import { BlogPostItem } from "../blogPostItem";
import "./styles.css";

interface BlogPostsProps {
  url: string;
  blogType: string;
}

export const BlogPosts = ({ url, blogType }: BlogPostsProps) => {
  const {
    data: titles,
    loading: loadingTitles,
    error: errorTitles,
  } = useBlogPostsTitles(url);

  return (
    <div className="blog-posts flex-col-center">
      {loadingTitles && <CircularProgress />}
      {errorTitles && <p>Something went wrong</p>}
      {titles &&
        titles
          .sort((a, b) => b.localeCompare(a))
          .map((title, index) => (
            <BlogPostItem
              key={title}
              posts3Key={title}
              url={url}
              blogType={blogType}
              left={index % 2 === 0}
            />
          ))}
    </div>
  );
};
