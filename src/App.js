import "./App.css";
import axios from "axios";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import Repositories from "./components/Repositories";
import Pagination from "./components/Pagination";
import Page404 from "./components/Page404";
import RepositoryDetails from "./components/RepositoryDetails";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { auth, onAuthStateChanged } from "./config/index";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(5);
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, screenName, email, photoUrl } =
          user.reloadUserInfo;
        setUser({ displayName, screenName, email, photoUrl });
        const username = user.reloadUserInfo.screenName;

        const fetchRepositories = async () => {
          setLoading(true);
          const response = await axios.get(
            `https://api.github.com/users/${username}/repos`
          );
          setRepos(response.data);
          setLoading(false);
        };
        fetchRepositories();
      } else {
        setUser(null);
      }
    });
  }, []);

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);
  const navigate = useNavigate();

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    navigate("/repositories");
  };

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route index element={<Navigate to="repositories" replace />} />
        <Route
          path="repositories"
          element={
            user ? (
              <>
                <Repositories loading={loading} repos={currentRepos} />
                <Pagination
                  pageNumber={currentPage}
                  reposPerPage={reposPerPage}
                  totalRepos={repos.length}
                  paginate={paginate}
                />
              </>
            ) : (
              <Home />
            )
          }
        >
          <Route
            path=":repoName"
            element={
              <ErrorBoundary>
                <RepositoryDetails repos={currentRepos} />
              </ErrorBoundary>
            }
          />
        </Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
