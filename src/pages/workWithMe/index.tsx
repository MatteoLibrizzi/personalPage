import { InfoItem } from "../../components/infoItem";
import "./styles.css";

export const WorkWithMe = () => {
  return (
    <div className="work-with-me">
      <InfoItem textElement={<h1>Need a website?</h1>}>
        <p>You are in luck, I do freelancing!</p>
        <p>Contact me on linkedin or send me an email</p>
      </InfoItem>
    </div>
  );
};
