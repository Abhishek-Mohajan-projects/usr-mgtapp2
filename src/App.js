import React, { useEffect, useState } from "react";
import "./app.css";
import Users from "./Users";
import Search from "./Search";

const url = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);

  const fetchData = async (url) => {
    setIsLoading(false);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setIsLoading(false);
      setUsers(data);
      setFilteredUsers(data);
      setError(null);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData(url);
    }, 1500);
  }, [url]);

  const loadingMessage = (
    <p style={{ color: "white", textAlign: "center" }}>Data is Loading...</p>
  );

  const handleRemoveUser = (id) => {
    const filter = filteredUsers.filter((user) => {
      return user.id !== id;
    });
    setFilteredUsers(filter);
  };

  const handleOnSearch = (searchUser) => {
    let value = searchUser.toLowerCase();
    const newUser = users.filter((user) => {
      const userName = user.name.toLowerCase();
      return userName.startsWith(value);
    });
    setFilteredUsers(newUser);
  };

  return (
    <>
      <h1>User Management App 2</h1>
      <Search onSearch={handleOnSearch} />
      {isLoading && loadingMessage}
      {error && (
        <p style={{ color: "white", textAlign: "center" }}>
          Fetching Data Error
        </p>
      )}
      {users && <Users users={filteredUsers} onRemoveUser={handleRemoveUser} />}
    </>
  );
};

export default App;
