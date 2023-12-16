import { InfoItem } from "../infoItem";
import "./styles.css";
import coding from "../../static/toqua.png";
import athlete from "../../static/sport.png";
import traveling from "../../static/traveling.png";

export const InfoWithImages = () => {
  return (
    <div className="info-with-images row-big-col-small">
      <InfoItem
        textElement={
          <div className="flex-col-center">
            <h1>Coding</h1>
            <p className="short-p-style">
              Coding is my fulltime job and one of my favorites hobbies
            </p>
            <p className="short-p-style">
              I work as a Software Engineer at{" "}
              <a href="https://toqua.ai">Toqua</a>
            </p>
          </div>
        }
      >
        <a href="https://toqua.ai">
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
          <div className="flex-col-center">
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
          <div className="flex-col-center">
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
