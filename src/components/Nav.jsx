import React, { useState } from "react";
import { Link } from "react-router-dom";


function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <div className="burger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={isOpen ? "nav-open" : ""} id="menu">
        <li><Link to="/html" onClick={() => setIsOpen(false)}>HTML</Link></li>
        <li><Link to="/css" onClick={() => setIsOpen(false)}>CSS</Link></li>
        <li><Link to="/javascript" onClick={() => setIsOpen(false)}>JavaScript</Link></li>
        <li><Link to="/react" onClick={() => setIsOpen(false)}>React</Link></li>
        <li><Link to="/sanity" onClick={() => setIsOpen(false)}>Sanity</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
