import React from "react";
import "./Home.css";

const Home: React.FC = (): React.ReactElement => {
  return (
    <div>
      <h1>Welcome to the Star Wars Universe!</h1>
      <p>
        Explore information about characters, planets, and films from the Star
        Wars universe using the navigation bar above.
      </p>
      <p>May the Force be with you!</p>
    </div>
  );
};

export default Home;
