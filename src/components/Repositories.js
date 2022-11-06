import { Link, Outlet } from "react-router-dom";
import { auth } from "../config/index";
import { Helmet } from "react-helmet-async";
import "../styles/repo.css";

const Repositories = ({ repos, loading }) => {
  if (loading) {
    return <p>Loading...</p>;
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
      <div className="repository-container">
        <button onClick={signOut}>Sign Out</button>
        <ul className="repository-list">
          {repos.map((repo) => (
            <div className="repository-list-item">
              <li key={repo.id}>
                <Link to={`${repo.name}`} className="repo-link">
                  {repo.name}
                </Link>
                <p>
                  <span>Created at:</span> {repo.created_at}
                </p>
                <p>
                  <span>Description:</span> {repo.description}
                </p>
                <p>
                  <span>Language:</span> {repo.language}
                </p>
              </li>
            </div>
          ))}
          <Outlet />
        </ul>
      </div>
    </>
  );
};

export default Repositories;
