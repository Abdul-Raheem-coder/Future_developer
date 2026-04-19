import React, { useState } from 'react'
import { Link } from 'react-router'
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <nav className='nav-bar'>
        <div className='logo'>
          <h1 className='logo-heading'>App</h1>
        </div>
        <div className={`nav-list ${isMenuOpen ? "active" : ""}`}>
          <Link className='nav-link' to={"/"}>Home</Link>
          <Link className='nav-link' to={"/todo"}>TodoPage</Link>
          <Link className='nav-link' to={"/weather"}>WeatherApp</Link>
          <Link className='nav-link' to={"/about"}>About</Link>
        </div>
        <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <RxCross2 /> : <FiMenu />}
        </div>
       
      </nav>
    </div>
  )
}
