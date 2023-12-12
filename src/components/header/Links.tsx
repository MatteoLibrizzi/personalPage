import { Link } from "react-router-dom";

export const Links = () => {
  return (
    <div className="links">
      <Link className="link" to="/personalBlog">
        <h4>Personal Blog</h4>
      </Link>
      <Link className="link" to="/techBlog">
        <h4>Tech Blog</h4>
      </Link>
      <Link className="link" to="/workWithMe">
        <h4>Work With Me</h4>
      </Link>
    </div>
  );
};
