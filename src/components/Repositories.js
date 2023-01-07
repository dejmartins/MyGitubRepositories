import { Link, Outlet } from "react-router-dom";
import { auth } from "../config/index";
import { Helmet } from "react-helmet-async";
import "../styles/repo.css";
import { useLocation } from "react-router-dom";

const Repositories = ({ repos, loading }) => {
  const location = useLocation();
  if (loading) {
    return <p id="loading">Loading...</p>;
  }

  const signOut = (event) => {
    event.preventDefault();
    auth.signOut();
  };

  return (
    <>
      <Helmet>
        <title>Repositories</title>
        <meta name="description" content="My repositories" />
        <link rel="canonical" href="/repositories" />
      </Helmet>
      <div>
        <div className="header">
          <button onClick={signOut} id="sign-out-button">
            Leave here
          </button>
        </div>
        <div className="repository-container">
          <ul className="repository-list">
            {repos.map((repo) => (
              <div className="repository-list-item">
                <li key={repo.id}>
                  <p>
                    <Link
                      to={`${repo.name}`}
                      className="repo-link"
                      state={{ background: location }}
                    >
                      {repo.name}
                    </Link>
                    <span> was created at</span> {repo.created_at.slice(11, 16)}{" "}
                    {repo.created_at.slice(0, 10)}
                  </p>
                  <div className="summary">
                    <p>{repo.description}</p>
                    <p>
                      <span>Language:</span> {repo.language}
                    </p>
                  </div>
                </li>
              </div>
            ))}
            <Outlet />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Repositories;
