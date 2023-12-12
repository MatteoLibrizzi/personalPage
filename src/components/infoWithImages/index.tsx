import { InfoItem } from "../infoItem";
import "./styles.css";

export const InfoWithImages = () => {
  return (
    <div className="info-with-images flex-row-center">
      <InfoItem textElement={<h1>info 1</h1>}>
        <img
          className="image-item"
          src="https://picsum.photos/200/300"
          alt="random"
        />
      </InfoItem>
      <InfoItem textElement={<h1>info 2</h1>}>
        <img
          className="image-item"
          src="https://picsum.photos/200/300"
          alt="random"
        />
      </InfoItem>
      <InfoItem textElement={<h1>info 3</h1>}>
        <img
          className="image-item"
          src="https://picsum.photos/200/300"
          alt="random"
        />
      </InfoItem>
    </div>
  );
};
