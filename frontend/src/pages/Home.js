import { Link } from "react-router-dom";
// import Listing from "./Listing";

// components

const Home = () => {
  return (
    <div className="home">
      <Link to="/serviceproviders">
        <h1>Click here to see a list of our service providers</h1>
      </Link>
    </div>
  );
};

export default Home;
