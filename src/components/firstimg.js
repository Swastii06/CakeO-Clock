import "./firstimgstyles.css";
import React from 'react'
import OneImg from "../images/5-img.jpg";
import { Link } from "react-router-dom";



const Firstimg = () => {
  return (
    <div className=" first ">
        <div className="mask">
            <img className="into-img" src= {OneImg} alt="OneImg"/>
        </div>
        <div className="content">
          <h1>
            WHERE YOUR CRAVINGS MEET OUR FLAVOURS ! 
          </h1>
          <h4>
            THE HOME OF BAKERIES AND BEVERAGES ...
          </h4>
          <div>
            <Link to= "/menu" className="btn"> Menu </Link>
         
            <Link to= "/contact" className="btn btn-light"> Contact </Link>
          </div>
        </div>
      
    </div>
  );
};

export default Firstimg;
