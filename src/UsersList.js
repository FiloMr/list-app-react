import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./UsersList.css";

function UsersList(props) {
  return (
    <ul className="list">
      <li>
        Filip <span>X</span>
      </li>
      <li>
        Julia <span>X</span>
      </li>
    </ul>
  );
}
export default UsersList;
