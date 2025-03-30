import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Home.scss";
import Card from "../components/Card";
import Modal from "../components/Modal";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingCard from "../components/LoadingCard";

const Home = () => {
  const [delClicked, setDelClicked] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const [allUsersData, setAllUsersData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedUser, setSelectedUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loadingUsers, setLoadingUsers] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const page = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      setLoadingUsers(true);
      try {
        let allUsers = [];
        let currentPage = 1;
        let total_pages = 1;

        while (currentPage <= total_pages) {
          const res = await axios.get(
            `https://reqres.in/api/users?page=${currentPage}`
          );
          if (res?.data?.data) {
            allUsers = [...allUsers, ...res.data.data];
            total_pages = res.data.total_pages;
          }
          currentPage++;
        }

        setAllUsersData(allUsers);
        setLoadingUsers(false);
      } catch (err) {
        console.error("Error fetching all users:", err);
        setLoadingUsers(false);
      }
    };

    fetchAllUsers();
  }, []);

  useEffect(() => {
    setLoadingUsers(true);
    axios
      .get(`https://reqres.in/api/users?page=${page}`)
      .then((res) => {
        let data = res?.data;
        setUsersData(data?.data);
        setTotalPages(data?.total_pages);
        setLoadingUsers(false);
      })
      .catch((err) => {
        console.log(err, "Error in fetching user details.");
        setLoadingUsers(false);
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
          toast.success("User deleted successfully!");
          setUsersData(usersData.filter((user) => user.id !== data));
        }
      })
      .catch((err) => {
        console.log(err, "Error in deleting user.");
        toast.error("Failed to delete user!");
      });
  };

  const filteredUsers = searchTerm
    ? allUsersData.filter((user) =>
        `${user.first_name} ${user.last_name}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    : usersData;

  return (
    <div className="homepage">
      <Navbar />

      <div className="search-bar-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search user.."
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </div>

      <div className="home-container">
        {loadingUsers ? (
          [...Array(6)].map((_, i) => <LoadingCard key={i} />)
        ) : filteredUsers.length > 0 ? (
          filteredUsers.map((e, i) => (
            <Card
              key={i}
              data={e}
              setDelClicked={setDelClicked}
              setSelectedUser={setSelectedUser}
            />
          ))
        ) : (
          <p className="no-users">
            No users found with the search query, please try again with a
            different query.
          </p>
        )}
      </div>

      {!searchTerm || !loadingUsers && (
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
      )}

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
