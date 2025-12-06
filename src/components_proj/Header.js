import React from 'react';
import './header.css';
import { Link } from 'react-router-dom'; // To use working links for Header tabs. 


export default function Header()
{
  return(
    <nav class = "header">
        <div>
            <Link to = "/" className = "button home-button">Home</Link>
            <Link to = "/about" className = "button about-button">About</Link>
            <Link to = "/contact" className = "button contact-button">Contact</Link>
        </div>
    </nav>
  );
}