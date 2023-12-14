import { BlogPosts } from "../../components/blogPosts";
import { PERSONAL_BLOG_API_URL } from "../../others/constants";

export const PersonalBlog = () => {
  return (
    <BlogPosts url={PERSONAL_BLOG_API_URL} />
  );
};
