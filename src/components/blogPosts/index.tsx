import { useBlogPostsImagesKeys } from "../../hooks/useBlogPostsImagesKeys";
import { useBlogPostsTitles } from "../../hooks/useBlogPostsTitles";
import { BlogPostItem } from "../blogPostItem";
import "./styles.css";

interface BlogPostsProps {
  url: string;
}

export const BlogPosts = ({ url }: BlogPostsProps) => {
  const {
    data: titles,
    loading: loadingTitles,
    error: errorTitles,
  } = useBlogPostsTitles(url);

  return (
    <div className="blog-posts flex-col-center">
      {loadingTitles && <p>Loading...</p>}
      {errorTitles && <p>Something went wrong</p>}
      {titles &&
        titles
          .sort((a, b) => b.localeCompare(a))
          .map((title) => <BlogPostItem key={title} posts3Key={title} url={url} />)}
    </div>
  );
};
