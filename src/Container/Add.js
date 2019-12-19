// Add.js

import React, { Component } from 'react';

export default class Add extends Component {
    constructor(props) {
        super(props);
        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangePersonEmail = this.onChangePersonEmail.bind(this);
        this.onChangePersonPassword = this.onChangePersonPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
            person_name: '',
            person_email: '',
            person_password:''
        }
    }
    onChangePersonName(e) {
      this.setState({
        person_name: e.target.value
      });
    }
    onChangePersonEmail(e) {
      this.setState({
        person_email: e.target.value
      })  
    }
    onChangePersonPassword(e) {
      this.setState({
        person_password: e.target.value
      })
    }
  
    onSubmit(e) {
      e.preventDefault();
      console.log(`The values are ${this.state.person_name}, ${this.state.person_email}, and ${this.state.person_password}`)
      this.setState({
        person_name: '',
        person_email: '',
        person_password: ''
      })
    }
    render() {
        return (
            <div className="mt-4">
                <h3>Add New Person</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Person Name:  </label>
                        <input 
                        type="text" 
                        className="form-control"
                        value={this.state.person_name}
                        onChange={this.onChangePersonName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Person Email: </label>
                        <input 
                        type="text" 
                        className="form-control"
                        value={this.state.person_email}
                        onChange={this.onChangePersonEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Person Password: </label>
                        <input 
                        type="text" 
                        className="form-control"
                        value={this.state.person_password}
                        onChange={this.onChangePersonPassword}
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