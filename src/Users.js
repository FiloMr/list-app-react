import React, { Component} from "react";
import ReactDOM from "react-dom/client";
import "./Users.css";
import UsersList from "./UsersList";

class Users extends Component {
  render() {
    return (
      <div className="user-main">
        <h1>User's List</h1>
        <form>
          <input type= "text" placeholder="Enter name"/>
          <button>Add User</button>
        </form>
        <UsersList />
      </div>
    );
  }
}
export default Users;