import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';

const colors = {
  primary: '#713491',
  secondary: '#11cef6',
  tertiary: '#f8e03e',
  quaternary: '#fd46d6',
};

const StyledNavbar = styled.nav`
  background-color: ${colors.primary};
  color: ${colors.secondary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  position: fixed;
  width: 250px;

  @media screen and (max-width: 767px) {
    width: 100%;
    height: auto;
    flex-direction: column;
    padding: 10px;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  margin: 20px auto 20px;
  cursor: pointer;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;


const NavItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 767px) {
    display: ${({ isNavOpen }) => (isNavOpen ? 'flex' : 'none')};
  }
`;

const NavLink = styled.a`
  color: ${colors.primary};
  text-decoration: none;
  background-color: ${colors.tertiary};
  padding: 10px 0px;
  margin-bottom: 20px;
  width: 80%;
  font-size: 20px;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.4s ease, color 0.4s ease;
  text-align: center;

  &:hover {
    background-color: ${colors.quaternary};
    color: ${colors.tertiary};
  }

  &.active {
    background-color: ${colors.secondary};
    color: ${colors.tertiary};
  }
`;

const HorizontalRule = styled.hr`
  width: 80%;
  border-top: 1px solid ${colors.secondary};
  margin-bottom: 20px;
`;

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <StyledNavbar>
      <Logo onClick={toggleNav}><img src={logo} alt="Logo" /></Logo>
      <NavItems isNavOpen={isNavOpen}>
        <HorizontalRule />
        <NavLink href="/">BLOG</NavLink>
        <NavLink href="/projects">PROJECTS</NavLink>
        <NavLink href="/faq">FAQ</NavLink>
      </NavItems>
    </StyledNavbar>
  );
};

export default Navbar;
