import { Button, Card, Container, Typography } from "@mui/material";
import {
  BLOG_LINK,
  PERSONAL_BLOG_SUFFIX,
  TECH_BLOG_SUFFIX,
  WORK_WITH_ME_LINK,
} from "../../others/constants";
import "./styles.css";

import PersonIcon from "@mui/icons-material/Person";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import { Link } from "react-router-dom";

const cardSx = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  bgcolor: "secondary.light",
  gap: "1vh",
  padding: "2vh",
  width: "20vw",
};

export const PagesPresentation = () => {
  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h4" fontWeight={"bold"}>
        About this website:
      </Typography>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "2vw",
        }}
      >
        <Card sx={cardSx}>
          <Typography>
            If you want to learn more about my travels and personal life, visit
            my personal blog
          </Typography>
          <Link to={`${BLOG_LINK}/${PERSONAL_BLOG_SUFFIX}`}>
            <Button variant="contained" sx={{ gap: "1vw" }}>
              <PersonIcon />
              <Typography>Personal Blog</Typography>
            </Button>
          </Link>
        </Card>
        <Card sx={cardSx}>
          <Typography>
            If you want to learn more about my coding experience, visit my tech
            blog
          </Typography>
          <Link to={`${BLOG_LINK}/${TECH_BLOG_SUFFIX}`}>
            <Button variant="contained" sx={{ gap: "1vw" }}>
              <DeviceHubIcon />
              <Typography>Tech Blog</Typography>
            </Button>
          </Link>
        </Card>
        <Card sx={cardSx}>
          <Typography>
            If you might be interested in working with me, visit my professional
            infomation page
          </Typography>
          <Link to={`${WORK_WITH_ME_LINK}`}>
            <Button variant="contained" sx={{ gap: "1vw" }}>
              <SyncAltIcon />
              <Typography>Work With Me</Typography>
            </Button>
          </Link>
        </Card>
      </Container>
    </Container>
  );
};
