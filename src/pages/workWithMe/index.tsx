import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { InfoItem } from "../../components/infoItem";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  MAIL_ADDRESS_URL,
} from "../../others/constants";
import "./styles.css";
import { FancyBox } from "../../components/fancyBox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

export const WorkWithMe = () => {
  const Head = () => (
    <TableHead style={{ backgroundColor: "lightblue" }}>
      <TableCell align="left">Type</TableCell>
      <TableCell align="left">Number of Pages</TableCell>
      <TableCell align="left">Max. Time Required</TableCell>
      <TableCell align="left">Price</TableCell>
    </TableHead>
  );
  const Body = () => (
    <TableBody>
      <TableRow>
        <TableCell align="left">Simple</TableCell>
        <TableCell align="left">1</TableCell>
        <TableCell align="left">2 weeks</TableCell>
        <TableCell align="left">1200€</TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="left">Simple</TableCell>
        <TableCell align="left">5</TableCell>
        <TableCell align="left">3 weeks</TableCell>
        <TableCell align="left">2000€</TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="left">Complex (API)</TableCell>
        <TableCell align="left">1</TableCell>
        <TableCell align="left">3 weeks</TableCell>
        <TableCell align="left">1500€</TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="left">Complex (API)</TableCell>
        <TableCell align="left">5</TableCell>
        <TableCell align="left">4 weeks</TableCell>
        <TableCell align="left">2500€</TableCell>
      </TableRow>
    </TableBody>
  );
  return (
    <div className="work-with-me icons flex-col-center">
      <InfoItem textElement={<h1>Grow your business with a website:</h1>}>
        <h3>Pricing:</h3>
        <Table>
          <Head />
          <Body />
        </Table>
      </InfoItem>
      <InfoItem textElement={<h1>Do you want to work with me?</h1>}>
        <FancyBox className="flex-row-center">
          <p style={{ paddingRight: "1vw" }}>Checkout what I can do on </p>
          <Link to={GITHUB_URL}>
            <GitHub />
          </Link>
        </FancyBox>
        <div className="flex-row-center">
          <p>THEN</p>
        </div>
        <FancyBox className="flex-row-center">
          <p style={{ paddingRight: "1vw" }}>Contact me on </p>
          <Link to={LINKEDIN_URL}>
            <LinkedIn />
          </Link>
        </FancyBox>
        <div className="flex-row-center">
          <p>OR</p>
        </div>
        <FancyBox className="flex-row-center">
          <p style={{ paddingRight: "1vw" }}>Contact me via email</p>
          <Link to={MAIL_ADDRESS_URL}>
            <Mail />
          </Link>{" "}
        </FancyBox>
      </InfoItem>
    </div>
  );
};
