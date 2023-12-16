import "./styles.css";
import { LinksItem } from "../header/LinksItem";

export const ErrorMessage = () => {
  return (
    <div className="flex-col-center">
      <h1>An error occurred</h1>
      <h2>We apologize for the inconvenience</h2>
      <LinksItem to="/" content={"Go back to the home page"} />
    </div>
  );
};
