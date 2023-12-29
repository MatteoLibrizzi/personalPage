import { CircularProgress, Container } from "@mui/material";
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
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "5vh",
        padding: "5vh",
      }}
    >
      {loadingTitles && <CircularProgress />}
      {errorTitles && !titles && <p>Something went wrong</p>}
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
    </Container>
  );
};
