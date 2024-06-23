import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes, FaCaretDown } from 'react-icons/fa';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #000000;
  color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.8em;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  color: #ff6f61;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: #ff6f61;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    background-color: #000000;
    position: absolute;
    top: 60px;
    left: 0;
    padding: 20px;
    z-index: 999;
    display: ${props => (props.open ? 'flex' : 'none')};
  }

  a, button {
    color: #ffffff;
    margin: 0 20px;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    font-size: 1em;
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #ff6f61;
    }

    @media (max-width: 768px) {
      margin: 10px 0;
    }
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  cursor: pointer;
  font-size: 1.5em;

  &:hover {
    text-decoration: underline;
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  @media (max-width: 768px) {
    display: block;
    margin: 10px 0;
  }
`;

const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
  }
`;

const DropdownContent = styled.div`
  display: ${props => (props.open ? 'block' : 'none')};
  position: absolute;
  background-color: #000000;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;

  button {
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    width: 100%;
    text-align: left;

    &:hover {
      background-color: #00000;
    }
  }

  @media (max-width: 768px) {
    position: static;
    display: ${props => (props.open ? 'block' : 'none')};
    width: 100%;
  }
`;

const MenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 1.8em;
    cursor: pointer;
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false); // Close menu after navigation
  };

  return (
    <HeaderContainer>
      <LogoContainer to="/home">
        RABAX
      </LogoContainer>
      <MenuIcon onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <Nav open={menuOpen}>
        <NavLink to="/home">HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <Dropdown>
          <DropdownButton onClick={toggleDropdown}>
            SERVICES <FaCaretDown />
          </DropdownButton>
          <DropdownContent open={dropdownOpen}>
            <button onClick={() => handleNavigation('/solar-roof-top')}>Solar RoofTop</button>
            <button onClick={() => handleNavigation('/solar-residential-mounting')}>Solar Residential Mounting</button>
            <button onClick={() => handleNavigation('/solar-commercial-mounting')}>Solar Commercial Mounting</button>
            <button onClick={() => handleNavigation('/solar-water-heater')}>Solar Water Heaters</button>
            <button onClick={() => handleNavigation('/solar-maintenance')}>Operation & Maintenance</button>
            <button onClick={() => handleNavigation('/solar-power-fencing')}>Solar Powered Fencing</button>
            
          </DropdownContent>
        </Dropdown>
        <NavLink to="/contact">ENQUIRE NOW</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
