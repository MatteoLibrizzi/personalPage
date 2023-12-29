import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { InfoItem } from "../../components/infoItem";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  MAIL_ADDRESS_URL,
} from "../../others/constants";
import "./styles.css";
import {
  Card,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const DiscounterPrice = ({
  oldPrice,
  newPrice,
}: {
  oldPrice: number;
  newPrice: number;
}) => (
  <Container
    sx={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Typography sx={{ textDecoration: "line-through" }}>{oldPrice}€</Typography>
    <Typography sx={{ paddingLeft: "1vw" }}>{newPrice}€</Typography>
  </Container>
);

const textCardSx = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  padding: "2vh",
  bgcolor: "primary.light",
};

export const WorkWithMe = () => {
  const Head = () => (
    <TableHead sx={{ bgcolor: "primary.light" }}>
      <TableCell align="left">Type</TableCell>
      <TableCell align="left">Number of Pages</TableCell>
      <TableCell align="left">Max. Time Required</TableCell>
      <TableCell align="left">Minimum Price</TableCell>
      <TableCell align="left">Maximum Price</TableCell>
    </TableHead>
  );
  const Body = () => (
    <TableBody>
      <TableRow>
        <TableCell align="left">Simple</TableCell>
        <TableCell align="left">1</TableCell>
        <TableCell align="left">2 weeks</TableCell>
        <TableCell align="left">
          <DiscounterPrice oldPrice={1000} newPrice={800} />
        </TableCell>
        <TableCell align="left">1200€</TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="left">Simple</TableCell>
        <TableCell align="left">5</TableCell>
        <TableCell align="left">3 weeks</TableCell>
        <TableCell align="left">
          <DiscounterPrice oldPrice={1400} newPrice={1200} />
        </TableCell>
        <TableCell align="left">1600€</TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="left">Complex (API)</TableCell>
        <TableCell align="left">1</TableCell>
        <TableCell align="left">3 weeks</TableCell>
        <TableCell align="left">
          <DiscounterPrice oldPrice={1700} newPrice={1500} />
        </TableCell>
        <TableCell align="left">2100€</TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="left">Complex (API)</TableCell>
        <TableCell align="left">5</TableCell>
        <TableCell align="left">4 weeks</TableCell>
        <TableCell align="left">
          <DiscounterPrice oldPrice={3000} newPrice={2500} />
        </TableCell>
        <TableCell align="left">3500€</TableCell>
      </TableRow>
    </TableBody>
  );
  return (
    <Container>
      <InfoItem textElement={<h1>Who am I?</h1>}>
        <Card sx={textCardSx}>
          <p style={{ paddingRight: "1vw" }}>Checkout my</p>
          <Link to={LINKEDIN_URL} target={"_blank"}>
            <LinkedIn sx={{ color: "secondary.dark" }} />
          </Link>
          <p style={{ paddingLeft: "1vw" }}> for the latest copy of my CV</p>
        </Card>
      </InfoItem>
      <InfoItem textElement={<h1>Grow your business with a website:</h1>}>
        <h3>Pricing:</h3>
        <Table>
          <Head />
          <Body />
        </Table>
        <p style={{ textAlign: "end", color: "gray" }}>
          Pricing might vary within the range based on the specifics of the
          project
        </p>
      </InfoItem>
      <InfoItem textElement={<h1>Do you want to work with me?</h1>}>
        <Card sx={textCardSx}>
          <p style={{ paddingRight: "1vw" }}>Checkout what I can do on </p>
          <Link to={GITHUB_URL} target={"_blank"}>
            <GitHub sx={{ color: "secondary.dark" }} />
          </Link>
        </Card>

        <div className="flex-row-center">
          <p>THEN</p>
        </div>
        <Card sx={textCardSx}>
          <p style={{ paddingRight: "1vw" }}>Contact me on </p>
          <Link to={LINKEDIN_URL} target={"_blank"}>
            <LinkedIn sx={{ color: "secondary.dark" }} />
          </Link>
        </Card>
        <div className="flex-row-center">
          <p>OR</p>
        </div>
        <Card sx={textCardSx}>
          <p style={{ paddingRight: "1vw" }}>Contact me via email</p>
          <Link to={MAIL_ADDRESS_URL} target={"_blank"}>
            <Mail sx={{ color: "secondary.dark" }} />
          </Link>
        </Card>
      </InfoItem>
    </Container>
  );
};
