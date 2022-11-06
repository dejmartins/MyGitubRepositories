import { Link, Outlet } from "react-router-dom";
import { auth } from "../config/index";
import { Helmet } from "react-helmet-async";

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
      <div>
        <button onClick={signOut}>Sign Out</button>
        <ul className="repository-list">
          {repos.map((repo) => (
            <li key={repo.id} className="repository-list-item">
              <Link to={`${repo.name}`}>{repo.name}</Link>
            </li>
          ))}
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default Repositories;
