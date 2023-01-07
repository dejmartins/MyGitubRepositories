import React from "react";
import { Link, useParams } from "react-router-dom";

const RepositoryDetails = ({ repos }) => {
  const { repoName } = useParams();

  return (
    <div className="repo-modal">
      <h5>More Details:</h5>
      <div className="repo-details-container">
        {repos
          .filter((repo) => repo.name === repoName)
          .map((repo) => (
            <div className="repo-card" key={repo.id}>
              <p>Owner: {repo.owner.login}</p>
              <p>Repo Id: {repo.id}</p>
              <p>Default Branch: {repo.default_branch}</p>
              <p>Visibility: {repo.visibility}</p>
              <p>
                View Project:{" "}
                <a
                  href="https://github.com/dejmartins/calculator.git"
                  style={{
                    backgroundColor: "transparent",
                    color: "black",
                  }}
                >
                  {repoName}
                </a>
              </p>
            </div>
          ))}
      </div>
      <Link to="/repositories" className="close-button">
        Leave
      </Link>
    </div>
  );
};

export default RepositoryDetails;
