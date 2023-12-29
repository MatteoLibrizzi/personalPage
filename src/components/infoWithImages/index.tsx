import { Card, Container, Link, Typography } from "@mui/material";
import athlete from "../../static/sport.png";
import coding from "../../static/toqua.png";
import traveling from "../../static/traveling.png";
import "./styles.css";

const infoSx = {
  bgcolor: "secondary.light",
  margin: "1vh",
  padding: "2vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

export const InfoWithImages = () => {
  return (
    <Container sx={{ display: "flex", flexDirection: "row" }}>
      <Card className="bounce-in-left" sx={infoSx} variant="outlined">
        <Typography variant="h4" fontWeight={"bold"}>
          Traveling
        </Typography>
        <Typography>Traveling gives great meaning to my life</Typography>
        <img
          className="image-item"
          src={traveling}
          alt="random"
          style={{ maxWidth: "150px", padding: "2vh 0 3vh 0" }}
        />
      </Card>
      <Card className="bounce-in-top" sx={infoSx} variant="outlined">
        <Typography variant="h4" fontWeight={"bold"}>
          Coding
        </Typography>
        <Typography>
          Coding is my fulltime job and one of my favorites hobbies
        </Typography>
        <Typography>
          I work as a Software Engineer at{" "}
          <Link
            href="https://toqua.ai"
            target={"_blank"}
            sx={{ textDecoration: "none", color: "primary.main" }}
          >
            Toqua
          </Link>
        </Typography>
        <Link href="https://toqua.ai" target={"_blank"}>
          <img
            className="image-item"
            src={coding}
            alt="random"
            style={{ maxWidth: "150px", padding: "2vh 0 3vh 0" }}
          />
        </Link>
      </Card>
      <Card className="bounce-in-right" sx={infoSx} variant="outlined">
        <Typography variant="h4" fontWeight={"bold"}>
          Sport
        </Typography>
        <Typography>
          I love playing sports and being phisically active
        </Typography>
        <img
          className="image-item"
          src={athlete}
          alt="random"
          style={{ maxWidth: "150px", padding: "2vh 0 3vh 0" }}
        />
      </Card>
    </Container>
  );
};
