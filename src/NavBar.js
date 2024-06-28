import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="navbar-links">
        <Link to={'/'} className="navbar-button">
          Shrek Slido
        </Link>
        <Link to={'/tictactoe'} className="navbar-button">
          Tic Tac Toe
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
