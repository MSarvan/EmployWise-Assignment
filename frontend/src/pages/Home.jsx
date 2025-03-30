import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Home.scss";
import Card from "../components/Card";
import Modal from "../components/Modal";
import axios from "axios";

const Home = () => {
  const [delClicked, setDelClicked] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const page = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users?page=${page}`)
      .then((res) => {
        let data = res?.data;
        // console.log(data, "data");
        // console.log(data?.data, "users data");
        setUsersData(data?.data);
        setTotalPages(data?.total_pages);
      })
      .catch((err) => {
        console.log(err, "Error in fetching user details.");
      });
  }, [page]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setSearchParams({ page: newPage });
      navigate(`/home?page=${newPage}`);
    }
  };

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
        {usersData?.map((e, i) => (
          <Card key={i} data={e} setDelClicked={setDelClicked} />
        ))}
      </div>
      <div className="pagination-container">
        <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>Previous</button>
        <span>Page {page} of {totalPages}</span>
        <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>Next</button>
      </div>

      {delClicked && <Modal setDelClicked={setDelClicked} />}
    </div>
  );
};

export default Home;
