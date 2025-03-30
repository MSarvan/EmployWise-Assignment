import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Home.scss";
import Card from "../components/Card";
import Modal from "../components/Modal";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [delClicked, setDelClicked] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedUser, setSelectedUser] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const page = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users?page=${page}`)
      .then((res) => {
        let data = res?.data;
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

  const handleDelete = (data) => {
    axios
      .delete(`https://reqres.in/api/users/${data}`)
      .then((res) => {
        if (res.status === 204) {
          setDelClicked(false);
          toast.success("User Deleted Successfully!");
          setUsersData(usersData.filter((user) => user.id !== data));
        }
      })
      .catch((err) => {
        console.log(err, "Error in deleting user.");
        toast.error("Failed to delete user!");
      });
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
          <Card
            key={i}
            data={e}
            setDelClicked={setDelClicked}
            setSelectedUser={setSelectedUser}
          />
        ))}
      </div>
      <div className="pagination-container">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>

      {delClicked && (
        <Modal
          setDelClicked={setDelClicked}
          handleDelete={handleDelete}
          selectedUser={selectedUser}
        />
      )}
    </div>
  );
};

export default Home;
