import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 1em;
  background-color: #333;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 1em;

  &:hover {
    text-decoration: underline;
  }
`;

export default Navbar;
