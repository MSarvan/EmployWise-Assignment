import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Home.scss";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="homepage">
      <Navbar />
      <div className="search-bar-container">
        <input type="text" className="search-bar" placeholder="Search for User.." />
      </div>
      <div className="home-container">
        {Array(12)
          .fill("")
          .map((_, i) => (
            <Card key={i} />
          ))}
      </div>
      <div className="pagination-container">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default Home;
