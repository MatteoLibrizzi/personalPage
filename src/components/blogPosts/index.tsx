import { useBlogPostsTitles } from "../../hooks/useBlogPostsTitles";
import { BlogPostItem } from "../blogPostItem";
import "./styles.css";

interface BlogPostsProps {
  url: string;
}

export const BlogPosts = ({ url }: BlogPostsProps) => {
  const { data: titles, loading, error } = useBlogPostsTitles(url);

  return (
    <div className="blog-posts flex-col-center">
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      {titles &&
        titles
          .sort((a, b) => b.localeCompare(a))
          .map((title) => <BlogPostItem key={title} s3Key={title} />)}
    </div>
  );
};
