// List.js

import React, { Component } from "react";
import Edit from "./Edit";

import { Link } from "react-router-dom";

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      users: JSON.parse(localStorage.getItem("users"))
    };
  }

  deleteUser = (id) => {
    // destructing
    const {users} = this.state
    const newUsersList = users.filter(u=>u.id !== id)
    //setState async
    localStorage.setItem('users', JSON.stringify(newUsersList));
    this.setState({
      users: newUsersList
    })
    // //any code after setState executed BEFORE setState
    // this.setState({
    //   users: newUsersList
    // }, ()=>{
    // //any code here will be executed AFTER setState
    // const {users:newList} = this.state
    // localStorage.setItem('users', JSON.stringify(newList));
      
    // })
  }
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user, i) => {
              return (
                <tr key={i}>
                  <td>{user.id}</td>
                  <td>{user.user_name}</td>
                  <td>{user.user_email}</td>
                  <td>{user.user_password}</td>
                  <td>
                    {/* <button type="button" className="btn btn-success mr-4">Edit</button> */}
                    <Link
                      to={"/edit/" + user.id}
                      className="btn btn-success mr-4"
                    >
                      Edit
                    </Link>
                    <Link
                      to={{
                        pathname: "/edit",
                        state: { userId: user.id }
                      }}
                      className="btn btn-info mr-4"
                    >
                      Edit
                    </Link>

                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={()=>this.deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
