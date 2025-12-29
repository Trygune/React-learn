import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import Buttoncomp from '../BTN/Button';

function Nav() {
  return (
    <ul className="navbarcomp">
      <li>
        <Link to="/">
          <Buttoncomp>Shop</Buttoncomp>
        </Link>
      </li>
      <li>
        <Link to="/about">
          <Buttoncomp>About</Buttoncomp>
        </Link>
      </li>
      <li>
        <Link to="/contact">
          <Buttoncomp>Contact</Buttoncomp>
        </Link>
      </li>
      <li>
        <Link to="/blog">
          <Buttoncomp>Blog</Buttoncomp>
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
