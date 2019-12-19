import React,  { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Add from './Container/Add';
import Edit from './Container/Edit';
import List from './Container/List';

class App extends Component {
  render() {
  return (
    <Router>
     <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">React CRUD Example</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/add'} className="nav-link">Add</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/list'} className="nav-link" >List</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/edit/:id'} className="nav-link">Edit</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <h2>Welcome to React CRUD</h2> <br/>
          <Switch>
              <Route exact path='/add' component={ Add } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/list' component={ List } />
          </Switch>
        </div>
      </Router>
  );
}
}
export default App;
