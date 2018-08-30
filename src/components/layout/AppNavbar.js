import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase'; // firebaseConnect for authentication

class AppNavbar extends Component {
  state = {
    isAuthenticated: false
  }

  onLogoutClick = (e) => {
    e.preventDefault();
    const { firebase } = this.props;
    firebase.logout();
  }

  //https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
  // invoked right before calling the render() method
  static getDerivedStateFromProps(props, state) {
    const { auth } = props;

    if (auth.uid) {
      return { isAuthenticated: true }
    } else {
      return { isAuthenticated: false }
    }
  }

  render() {
    const { isAuthenticated } = this.state;
    const { auth } = this.props;

    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
        <div className="container">
          <Link to="/" className="navbar-brand">Client Panel</Link>
        </div>
        <button className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarMain"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav mr-auto">
            { isAuthenticated ? (<li className="nav-item">
              <Link to="/" className="nav-link">Dashboard</Link>
            </li>) : null }
          </ul>
          { isAuthenticated ? (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="#!" className="nav-link">
                  { auth.email }
                </a>
              </li>
              <li className="nav-item">
                <Link to="/settings" className="nav-link">Settings</Link>
              </li>
              <li className="nav-item">
                <a href="#!" className="nav-link" onClick={ this.onLogoutClick }>
                  Logout
                </a>
              </li>
            </ul>
          ) : null }
        </div>
      </nav>
    )
  }
}


AppNavbar.propTypes = {
  firebase: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
}

export default compose(
  firebaseConnect(),
  connect((state, props) => ({ auth: state.firebase.auth, settings: state.settings }))
)(AppNavbar);
//export default AppNavbar;