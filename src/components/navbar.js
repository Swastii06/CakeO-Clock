import "./navbarstyles.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"


const Navbar = () => {
    const [click, setclick] =useState(false);
    const handleClick = () => setclick(!click);

    const[color, setcolor]=useState(false);
    const changecolor =() =>{
      if(window.scrollY >=100){
        setcolor(true);
      }
      else{
        setcolor(false);
      }
    };

    window.addEventListener("scroll", changecolor);

  return (
    <div className={color ? "header header-bg": "header"}>
      <Link to="/">
        <h1>Cake o'clock</h1>
      </Link>
      <ul className={click?"nav-menu active":"nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click?(<FaTimes size={20} style={{color: "wheat"}} />): ( <FaBars size={20} style={{color: "wheat"}} />)}
      
      
      </div>
    </div>
  );
};

export default Navbar;
