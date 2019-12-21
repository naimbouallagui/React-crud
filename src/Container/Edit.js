import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Edit extends Component {
  constructor(props) {
    super(props);
    const allUsers = JSON.parse(localStorage.getItem("users"));
    const userId =
      this.props.match.params.userId || this.props.location.state.userId;

    this.state = {
      user: allUsers.find(u => u.id === parseInt(userId)),
      disableButton: true
    };
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState(oldState => ({
      user: { ...oldState.user, [name]: value },
      disableButton : false
    }));
    // this.setState(({ user }) => ({
    //     user: { ...user, [name]: value }
    //   }));
  };

  onSaveChange = e => {
    e.preventDefault();
    const { user: newUser } = this.state;
    const allUsers = JSON.parse(localStorage.getItem("users"));
    const nextUsers = allUsers.map(u => {
      if (u.id === newUser.id) {
        return newUser;
      }
      return u;
    });
    // const nextUsers = allUsers.map(u => {
    //   const x = u.id === newUser.id ? newUser : u;
    //   return x;
    // });
    // const nextUsers = allUsers.map(u => {
    //   return u.id === newUser.id ? newUser : u;
    // });
    // const nextUsers = allUsers.map(u => (u.id === newUser.id ? newUser : u));
    localStorage.setItem("users", JSON.stringify(nextUsers));
    // eslint-disable-next-line no-restricted-globals
    const res = confirm("Updated Successfuly!\n back to list ?");
    if (res) {
      //redirect to list
      const { history } = this.props;
      history.push({ pathname: "/List" });
    }
  };

  render() {
    const { user,disableButton } = this.state;
    return (
      <div>
        <form onSubmit={this.onSaveChange}>
          <div className="form-group">
            <label>Edit User Name: </label>
            <input
              type="text"
              name="user_name"
              className="form-control"
              value={user.user_name}
              onChange={e => this.onChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Edit User Email: </label>
            <input
              type="text"
              name="user_email"
              className="form-control"
              value={user.user_email}
              onChange={e => this.onChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Edit User Password: </label>
            <input
              type="text"
              name="user_password"
              className="form-control"
              value={user.user_password}
              onChange={e => this.onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Save"
              disabled= {disableButton}
              className="btn btn-primary mr-3"
            />
            <Link to={"/List"} className="btn btn-secondary">
              Back To List
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
