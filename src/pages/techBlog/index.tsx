import { BlogPosts } from "../../components/blogPosts";
import { TECH_BLOG_API_URL } from "../../others/constants";

export const TechBlog = () => {
  return <BlogPosts url={TECH_BLOG_API_URL} blogType="tech" />;
};
