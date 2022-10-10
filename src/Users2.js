import React, { createRef, useState } from "react";
import "./Users.css";
import UsersList from "./UsersList";

function UsersStates() {
  const [users, setUser] = useState([]);
  let inputText = React.createRef();

  const RemoveUser = (userIndex) => {
    setUser(users.filter((Users, index) => index !== userIndex));
  };

  const AddUser = (event) => {
    event.preventDefault();
    let newUser = inputText.current.value;
    inputText.current.value = "";
    if (newUser !== "") {
      setUser(users.concat(newUser));
    } else {
      alert("podaj nazwe uzytkownika");
    }
  };
  return (
    <div className="users-main">
      <h1>Users List</h1>
      <form onSubmit={AddUser}>
        <input
          type="text"
          placeholder="Enter name"
          ref={inputText}
          maxLength={17}
        />
        <button type="submit">Add user</button>
      </form>
      <UsersList usersList={users} removeMethod={RemoveUser} />
    </div>
  );
}
export default UsersStates;