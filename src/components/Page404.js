import React from "react";
import "../styles/error.css";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <div className="error">
      <h1>404.</h1>
      <h3>Not Found!</h3>

      <Link to="/" className="link">
        <button className="link_button">Go back</button>
      </Link>
    </div>
  );
}

export default Page404;
