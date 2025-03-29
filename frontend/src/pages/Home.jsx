import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Home.scss";
import Card from "../components/Card";
import Modal from "../components/Modal";

const Home = () => {
  const [delClicked, setDelClicked] = useState(false);

  return (
    <div className="homepage">
      <Navbar />
      <div className="search-bar-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for User.."
        />
      </div>
      <div className="home-container">
        {Array(12)
          .fill("")
          .map((e, i) => (
            <Card
              key={i}
              data={e}
              setDelClicked={setDelClicked}
            />
          ))}
      </div>
      <div className="pagination-container">
        <button>Previous</button>
        <button>Next</button>
      </div>

      {delClicked && <Modal setDelClicked={setDelClicked} />}
    </div>
  );
};

export default Home;
