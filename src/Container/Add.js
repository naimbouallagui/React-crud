// Add.js

import React, { Component } from 'react';

export default class Add extends Component {
    constructor(props) {
        super(props);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
            user_name: '',
            user_email: '',
            user_password:''
        }
    }
    onChangeUserName(e) {
      this.setState({
        user_name: e.target.value
      });
    }
    onChangeUserEmail(e) {
      this.setState({
        user_email: e.target.value
      })  
    }
    onChangeUserPassword(e) {
      this.setState({
        user_password: e.target.value
      })
    }
  
    onSubmit (e) {
      e.preventDefault();
      const { user_name, user_email, user_password } = this.state;
    //     localStorage.setItem('user_name', user_name);
    //     localStorage.setItem('user_email', user_email);
    //     localStorage.setItem('user_password', user_password);
        console.log(`The values are ${this.state.user_name}, ${this.state.user_email}, and ${this.state.user_password}`)
      let listUsers = JSON.parse(localStorage.getItem("users"));
      let users = [];
      if (listUsers == null) {
        listUsers = [];
      }
    //   if (this.isMajorAge() && passwordTest()) {
        users = {
          id: Math.floor(Math.random() * 1000 + 1),
          user_name: user_name,
          user_email: user_email,
          user_password: user_password,
        };
        listUsers.push(users);
        localStorage.setItem("users", JSON.stringify(listUsers));
       
    // re-empty state after onSubmit()
      this.setState({
        user_name: '',
        user_email: '',
        user_password: ''
      })
    }
    render() {
        return (
            <div className="mt-4">
                <h3>Add New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add User Name:  </label>
                        <input 
                        type="text"
                        name="user_name" 
                        className="form-control"
                        value={this.state.user_name}
                        onChange={this.onChangeUserName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add User Email: </label>
                        <input 
                        type="text" 
                        name="user_email"
                        className="form-control"
                        value={this.state.user_email}
                        onChange={this.onChangeUserEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add User Password: </label>
                        <input 
                        type="text" 
                        name="user_password"
                        className="form-control"
                        value={this.state.user_password}
                        onChange={this.onChangeUserPassword}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}