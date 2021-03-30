import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import LogOutButton from './LogOutButton';
import { Link } from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import './header.css';

class Header extends React.Component {
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          {this.props.auth0.isAuthenticated &&
            <LogOutButton/>
          }
      </Navbar>
    )
  }
}

export default withAuth0(Header);
