import { InfoItem } from "../../components/infoItem";
import "./styles.css";

export const WorkWithMe = () => {
  return (
    <div className="work-with-me">
      <InfoItem textElement={<h1>Do you want to work with me?</h1>}>
        <div className="flex-row-center">
          <p>Contact me on </p>
          <h1>aa</h1>
        </div>
        <div className="flex-row-center">
          <p>Contact me via email</p>
          <h1>aa</h1>
        </div>
      </InfoItem>
    </div>
  );
};
