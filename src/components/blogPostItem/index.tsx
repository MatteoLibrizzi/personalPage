import { Link } from "react-router-dom";
import { useBlogPostImage } from "../../hooks/useBlogPostImagesContent";
import "./styles.css";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

interface BlogPostItemProps {
  posts3Key: string;
  url: string;
  blogType: string;
  left: boolean;
}

const getPostImageKeyFromTitle = (title: string) => {
  const titleParts = title.split("__");
  const imageKey = titleParts[0] + ".jpg";
  return imageKey;
};

export const BlogPostItem = (props: BlogPostItemProps) => {
  const { posts3Key, url, blogType, left } = props;

  const s3KeyParts = posts3Key.split("__");

  const imageKey = getPostImageKeyFromTitle(posts3Key);

  const date = s3KeyParts[0];
  const displayTitle = s3KeyParts[1].replaceAll("_", " ");

  const { data: image, loading: loadingImage } = useBlogPostImage(
    url,
    imageKey
  );

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "5vh",
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
          bgcolor: "secondary.light",
        }}
      >
        <CardMedia sx={{ padding: "3vh" }}>
          {loadingImage && <CircularProgress />}
          {image && (
            <img
              src={image}
              alt={displayTitle}
              style={{
                maxWidth: "400px",
                maxHeight: "400px",
                paddingRight: "10vw",
              }}
            />
          )}
        </CardMedia>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2vh",
          }}
        >
          <Link
            to={`/blog/post/${blogType}/${posts3Key}`}
            style={{ textDecoration: "none" }}
          >
            <Button variant="contained">
              <AutoStoriesIcon sx={{ paddingRight: "1vw" }} />
              {displayTitle}
            </Button>
          </Link>
          <Typography>{date}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};
