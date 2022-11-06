import React from "react";
import { Link, useParams } from "react-router-dom";

const RepositoryDetails = ({ repos }) => {
  const { repoName } = useParams();

  return (
    <div>
      RepositoryDetails
      <h1>RepoId: {repoName}</h1>
      <div className="repo-details-container">
        {repos
          .filter((repo) => repo.name === repoName)
          .map((repo) => (
            <div className="repo-card" key={repo.id}>
              <h2>Repo Id: {repo.id}</h2>
            </div>
          ))}
      </div>
      <Link to="/repositories">Close</Link>
    </div>
  );
};

export default RepositoryDetails;
