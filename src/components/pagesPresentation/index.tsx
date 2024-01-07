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
  justifyContent: "space-between",
  alignItems: "center",
  textAlign: "center",
  bgcolor: "secondary.light",
  gap: "1vh",
  padding: "2vh",
  width: "20vw",
  height: "180px",
};

const buttonSx = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1vh",
  padding: "1vh",
  width: "180px",
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
          flexDirection: { sm: "column", md: "row" },
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
          <Link
            style={{ textDecoration: "none" }}
            to={`${BLOG_LINK}/${PERSONAL_BLOG_SUFFIX}`}
          >
            <Button variant="contained" sx={buttonSx}>
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
          <Link
            style={{ textDecoration: "none" }}
            to={`${BLOG_LINK}/${TECH_BLOG_SUFFIX}`}
          >
            <Button variant="contained" sx={buttonSx}>
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
          <Link style={{ textDecoration: "none" }} to={`${WORK_WITH_ME_LINK}`}>
            <Button variant="contained" sx={buttonSx}>
              <SyncAltIcon />
              <Typography>Work With Me</Typography>
            </Button>
          </Link>
        </Card>
      </Container>
    </Container>
  );
};
