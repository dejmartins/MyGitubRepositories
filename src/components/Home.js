import { signInWithRedirect, auth, provider } from "../config/index";
import { FiChevronRight } from "react-icons/fi";
import "../styles/home.css";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const signIn = (event) => {
    event.preventDefault();
    signInWithRedirect(auth, provider);
  };

  return (
    <>
      <Helmet>
        <title>Welcome</title>
        <meta
          name="description"
          content="Share with friends to preview their github. Soon to be personalized!"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="home">
        <div className="logo">
          <p>" My Github Repo "</p>
        </div>
        <div className="welcome-back">
          <h3>Hello, Welcome Back</h3>
          <p>A preview of your github repositories</p>
          <div className="sign-in-button">
            <button onClick={(event) => signIn(event)}>
              <FiChevronRight size={25} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
