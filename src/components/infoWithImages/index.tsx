import athlete from "../../static/sport.png";
import coding from "../../static/toqua.png";
import traveling from "../../static/traveling.png";
import { InfoItem } from "../infoItem";
import "./styles.css";

export const InfoWithImages = () => {
  return (
    <div className="info-with-images row-big-col-small">
      <InfoItem
        textElement={
          <div className="flex-col-center bounce-in-left">
            <h1>Traveling</h1>
            <p className="short-p-style">
              Traveling gives great meaning to my life
            </p>
          </div>
        }
      >
        <img
          className="image-item"
          src={traveling}
          alt="random"
          style={{ maxWidth: "150px", padding: "2vh 0 3vh 0" }}
        />
      </InfoItem>
      <InfoItem
        textElement={
          <div className="flex-col-center bounce-in-top">
            <h1>Coding</h1>
            <p className="short-p-style">
              Coding is my fulltime job and one of my favorites hobbies
            </p>
            <p className="short-p-style">
              I work as a Software Engineer at{" "}
              <a href="https://toqua.ai" target={"_blank"} rel="noreferrer">
                Toqua
              </a>
            </p>
          </div>
        }
      >
        <a href="https://toqua.ai" target={"_blank"} rel="noreferrer">
          <img
            className="image-item"
            src={coding}
            alt="random"
            style={{ maxWidth: "150px", padding: "2vh 0 3vh 0" }}
          />
        </a>
      </InfoItem>
      <InfoItem
        textElement={
          <div className="flex-col-center bounce-in-right">
            <h1>Sport</h1>
            <p className="short-p-style">
              I love playing sports and being phisically active
            </p>
          </div>
        }
      >
        <img
          className="image-item"
          src={athlete}
          alt="random"
          style={{ maxWidth: "150px", padding: "2vh 0 3vh 0" }}
        />
      </InfoItem>
    </div>
  );
};
