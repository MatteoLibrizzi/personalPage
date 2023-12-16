import { Navigate, useParams } from "react-router-dom";

export const Redirect = () => {
  const params = useParams();
  const path = "/" + (params["*"] ?? "");

  return <Navigate to={path} />;
};
