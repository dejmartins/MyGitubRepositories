import { signInWithRedirect, auth, provider } from "../config/index";

const Home = () => {
  const signIn = (event) => {
    event.preventDefault();
    signInWithRedirect(auth, provider);
  };

  return (
    <div>
      <p>Welcome</p>
      <button onClick={(event) => signIn(event)}>Sign in</button>
    </div>
  );
};

export default Home;
