import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginButton from './Login';
import { withAuth0 } from '@auth0/auth0-react';
import LogoutButton from './Logout';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </NavItem>
        <NavItem>
          {this.props.auth0.isAuthenticated ? (
            <LogoutButton />
          ) : (
            <LoginButton />
          )}
        </NavItem>
        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
    );
  }
}

export default withAuth0(Header);
