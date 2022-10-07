import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./UsersList.css";

function UsersList(props) {
  let usersList = props.usersList;
  let usersElement = usersList.map((user,index) => {
    return (
      <li key={index}>
        {user} <span onClick={()=>props.removeMethod(index)}>X</span>
      </li>
    );
  });
  return (
    <ul className="list">
      {usersElement}
    </ul>
  );
}
export default UsersList;
