import { Contacts } from "../contacts";
import "./styles.css";
import { Logo } from "../logo";
import { Card, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2vh",
      }}
    >
      <Link to="/" style={{textDecoration: 'none'}}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "1vh",
          }}
        >
          <Logo />
          <Typography>All rights reserved</Typography>
        </Card>
      </Link>
      <Contacts />
    </Container>
  );
};
