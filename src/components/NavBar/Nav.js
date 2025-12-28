import React from "react";
import './Nav.css'
import Button from "../BTN/Button";
import { Link } from "react-router-dom";

const Nav=()=>(
    <ul className="navbar">
        <li>
            <Link to='/'>
                <Button>Shop</Button>
            </Link>
        </li>
        <li>
            <Link to='/about'>
                <Button>About</Button>
            </Link>
        </li>
        <li>
            <Link to='/contact'>
                <Button>Contact</Button>
            </Link>    
        </li>
        <li>
            <Link to='/blog'>
                <Button>Blog</Button>
            </Link>    
        </li>
    </ul>
)

export default Nav