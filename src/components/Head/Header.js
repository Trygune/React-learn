import React, { useContext } from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';
import Nav from '../NavBar/Nav';
import cartcontext from '../../Contexts/cartcontext';

function Header() {
  const { carts } = useContext(cartcontext);
  console.log('carts: ', carts);

  const { pathname } = useLocation();
  console.log('location: ', pathname);
  let titlepage = '';

  if (pathname.includes('product')) {
    titlepage = 'Shopping';
  } else {
    switch (pathname) {
      case '/':
        titlepage = 'Shop';
        break;
      case '/about':
        titlepage = 'About';
        break;
      case '/contact':
        titlepage = 'Contact';

        break;
      case '/blog':
        titlepage = 'Blog';

        break;
      case '/blog':
        titlepage = 'Blog';

        break;

      default:
        break;
    }
  }
  return (
    <div className="Header">
      <Nav />
      <div className="cart">
        <MdShoppingCart />
        <h4>{carts.length}</h4>
      </div>
      <hr />
      <h3>{titlepage}</h3>
    </div>
  );
}
export default Header;
