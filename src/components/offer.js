import { Link } from "react-router-dom"
import "./offerstyles.css"
import pic1 from "../images/cont.jpg"


import React from 'react'

const Offer = () => {
  return (
    <div className="offer">
     
        <div className="left">
        <div className="img-cont">
            <div className="img-stack-top">
                <img src={pic1} className="img" alt="true" />

            </div>
            
        </div>
          
        </div>
        <div className="right">
         <div className="first">
            <h2>TREATY TUESDAY OFFER !</h2>
            <p>Treat yourselves with unlimited foods from 15+ varieties every tuesday at only Rs 350.</p>
            </div> 
            <h4>HOME DELIVERY SERVICE AVAILABLE !</h4>
            <p>HURRY UP, A LOT MORE OFFERS AWAITING...</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
    </div>
      
    </div>
  )
}

export default Offer;
